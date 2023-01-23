locals {
  draft_domain = "draft.${local.domain_name}"
}

resource "aws_s3_bucket" "draft_bucket" {
  bucket = local.draft_domain
  tags = local.tags
}

resource "aws_s3_bucket_acl" "draft_bucket" {
  bucket = aws_s3_bucket.draft_bucket.bucket
  acl = "public-read"
}

resource "aws_s3_bucket_website_configuration" "draft_bucket" {
  bucket = aws_s3_bucket.root_bucket.bucket

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_cors_configuration" "draft_bucket" {
  bucket = aws_s3_bucket.draft_bucket.bucket

  cors_rule {
    allowed_headers = ["Authorization", "Content-Length"]
    allowed_methods = ["GET", "POST"]
    allowed_origins = ["https://${local.domain_name}"]
    max_age_seconds = 3000
  }
}

data "aws_iam_policy_document" "draft_bucket" {
  statement {
    sid = "${local.deployment.site}-${local.environment}-policy"
    effect = "Allow"
    actions = [
      "s3:GetObject"
    ]
    resources = [
      "arn:aws:s3:::${local.draft_domain}/*"
    ]
    principals {
      identifiers = [
        "*"
      ]
      type = "AWS"
    }
  }
}

resource "aws_s3_bucket_policy" "draft_bucket" {
  bucket = aws_s3_bucket.draft_bucket.id
  policy = data.aws_iam_policy_document.draft_bucket.json
}
