terraform {
  required_version = "~> 1.3.5"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.63"
    }
  }

  backend "s3" {
    bucket = "appi-infrastructure-terraform-state"
    key    = "terrencecurran.tfstate"
    region = "us-east-1"
  }
}
provider "aws" {
  region = "us-east-1"
}

provider "aws" {
  alias  = "acm_provider"
  region = "us-east-1"
}


