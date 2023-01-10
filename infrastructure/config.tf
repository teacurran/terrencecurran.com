locals {
  config = {
    defaults = {
      site = "terrencecurran"
      domain_name = "terrencecurran.com"
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
  domain_name = "${local.deployment.domain_prefix}${local.deployment.domain_name}"

  tags = {
    Namespace = local.domain_name
    Environment = local.environment
    Owner = "Terrence Curran"
    ManagedBy = "Terraform"
  }
}
