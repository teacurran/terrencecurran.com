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
  domain_name = "${deployment.domain_prefix}${deployment.domain_name}"

  tags = {
    Namespace = local.namespace
    Environment = local.environment
    Owner = "Terrence Curran"
    ManagedBy = "Terraform"
  }
}
