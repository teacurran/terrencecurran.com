locals {
  config = {
    defaults = {
      site = "terrencecurran"
      domain_names = ["terrencecurran.com", "wirelust.com"]
    }

    beta = {
      domain_prefix = "beta."
    }
    production = {
      domain_prefix = ""
    }
  }

  environment = terraform.workspace
  deployment = merge(local.config.defaults, local.config[terraform.workspace])
  domain_names = [for domain_name in local.deployment.domain_names: "${local.deployment.domain_prefix}${domain_name}"]
  domain_name = local.domain_names[0]

  tags = {
    Namespace = local.domain_name
    Environment = local.environment
    Owner = "Terrence Curran"
    ManagedBy = "Terraform"
  }
}
