# terrencecurran.com

Personal portfolio and blog site built with [Astro](https://astro.build/) and [EmDash CMS](https://github.com/emdash-cms/emdash/). Deployed to a self-hosted k3s cluster via Cloudflare Tunnel.

## Tech Stack

- **Framework**: Astro 6 (beta) with server-side rendering
- **CMS**: EmDash (database-backed, admin UI at `/_emdash/admin`)
- **Database**: PostgreSQL 17
- **Storage**: Cloudflare R2 (S3-compatible)
- **Runtime**: Node.js 22+ (required by Astro 6)
- **Deployment**: Docker container on k3s, exposed via Cloudflare Tunnel

## Local Development

### Prerequisites

- Node.js 22+
- PostgreSQL (local or remote)

### Setup

1. Clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. Create a local PostgreSQL database:

   ```sql
   CREATE USER terrencecurran_dev WITH PASSWORD 'password';
   CREATE DATABASE terrencecurran_dev OWNER terrencecurran_dev;
   ```

3. Copy `.env.example` to `.env` and update values:

   ```bash
   cp .env.example .env
   ```

   The default `DATABASE_URL` points to the local database above. S3 storage is optional for local development — EmDash falls back to local file storage when S3 env vars are not set.

4. Start the dev server:

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:4321/_emdash/admin` to set up your admin account and start creating content.

## Important: Runtime Configuration

EmDash serializes its config at build time via Vite virtual modules. This means environment variables like `DATABASE_URL` read in `astro.config.mjs` get baked into the build output as literal strings.

To support different database and storage credentials per environment (beta, production), this project uses **custom runtime entrypoints** instead of the standard `postgres()` and `s3()` config helpers:

- `src/db-runtime.ts` — reads `DATABASE_URL` from `process.env` at runtime
- `src/storage-runtime.ts` — reads `S3_*` env vars from `process.env` at runtime

These are referenced in `astro.config.mjs` as custom `entrypoint` paths in the database and storage descriptors. If you switch back to the standard `postgres()` helper, the connection string will be hardcoded at build time.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `EMDASH_AUTH_SECRET` | Production | Secret for EmDash auth tokens |
| `EMDASH_PREVIEW_SECRET` | Production | Secret for preview mode |
| `S3_ENDPOINT` | Production | R2/S3 endpoint URL |
| `S3_BUCKET` | Production | Storage bucket name |
| `S3_ACCESS_KEY_ID` | Production | Storage access key |
| `S3_SECRET_ACCESS_KEY` | Production | Storage secret key |
| `S3_REGION` | No | Storage region (default: `auto`) |
| `S3_PUBLIC_URL` | No | Public CDN URL for media |

## Building

```bash
npm run build
npm start
```

The build output is in `dist/`. The server runs on port 4321 by default.

## Docker

```bash
docker build -t terrencecurran .
docker run -p 4321:4321 \
  -e DATABASE_URL=postgres://user:pass@host:5432/db \
  terrencecurran
```

The Dockerfile uses a multi-stage build with `node:22-alpine`. The container runs as a non-root `emdash` user and exposes port 4321 with a health check on `/health`.

## Deployment

Deployment is fully automated via GitHub Actions:

- **Push to `beta`** → builds, pushes Docker image, deploys to `beta.terrencecurran.com`
- **Push to `main`** → builds, pushes Docker image, deploys to `terrencecurran.com` (requires manual approval)

The deploy pipeline:
1. CI builds and pushes a Docker image to Docker Hub (tagged with commit SHA)
2. Connects to the k3s cluster via WireGuard VPN
3. Runs an Ansible playbook that generates and applies Kubernetes manifests (Deployment, Service, Ingress)
4. Runs a smoke test against the `/health` endpoint

### GitHub Secrets Required

**Repository-level:**
- `DOCKER_USERNAME`, `DOCKER_PASSWORD` — Docker Hub credentials
- `K3S_SSH_PRIVATE_KEY`, `K3S_USER` — SSH access to k3s node
- `USE_WIREGUARD` — set to `true`
- `WIREGUARD_PRIVATE_KEY`, `WIREGUARD_ADDRESS`, `WIREGUARD_PEER_PUBLIC_KEY`, `WIREGUARD_ENDPOINT`, `WIREGUARD_ALLOWED_IPS` — WireGuard VPN config
- `S3_ENDPOINT`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_REGION` — shared storage credentials
- `EMDASH_AUTH_SECRET`, `EMDASH_PREVIEW_SECRET` — EmDash secrets

**Per-environment (beta, production):**
- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD` — database connection
- `S3_BUCKET`, `S3_PUBLIC_URL` — environment-specific bucket

### WireGuard Peer Setup

Each repo that deploys to k3s needs a WireGuard peer on the VPN server. Generate one with the Ansible playbook in the infrastructure repo:

```bash
ansible-playbook playbooks/generate-github-actions-wireguard-peer.yml \
  -e peer_name=terrencecurran-github-actions \
  -e peer_ip=10.200.0.12
```

The playbook generates keys, adds the peer to the server config, and outputs the values needed for GitHub secrets. Store the key file in the infrastructure repo's `wireguard/` directory for reference.

## Blog Migration

The `jekyll/` directory contains the original Jekyll blog. To migrate posts to EmDash:

```bash
npm run migrate
```

This runs `scripts/migrate-jekyll.ts`, which parses Jekyll front matter, converts Markdown to Portable Text blocks, and outputs seed JSON for import via the EmDash admin UI.

## Project Structure

```
├── ansible/                  # Kubernetes deployment playbook
├── .github/workflows/        # CI/CD pipelines
├── jekyll/                   # Original Jekyll blog (reference)
├── scripts/                  # Migration scripts
├── seed/                     # EmDash seed data (schema, portfolio projects)
├── src/
│   ├── db-runtime.ts         # Runtime database config (reads env vars)
│   ├── storage-runtime.ts    # Runtime S3 storage config (reads env vars)
│   ├── env.d.ts              # TypeScript declarations
│   └── pages/
│       └── health.ts         # Health check endpoint for k8s probes
├── astro.config.mjs          # Astro + EmDash configuration
├── Dockerfile                # Multi-stage Docker build
└── tsconfig.json             # TypeScript config (excludes jekyll/)
```
