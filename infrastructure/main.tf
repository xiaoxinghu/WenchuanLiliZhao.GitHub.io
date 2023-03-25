terraform {

  backend "s3" {
    bucket = "nycat-tf-remote-states"
    key    = "nycat-web"
    region = "ap-southeast-2"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0.0"
    }
    docker = {
      source  = "kreuzwerker/docker"
      version = "2.16.0"
    }
  }
}

data "aws_caller_identity" "current" {}

data "aws_ecr_authorization_token" "token" {}

locals {
  ecr_url = "${data.aws_caller_identity.current.account_id}.dkr.ecr.${var.region}.amazonaws.com"
}

# providers
provider "aws" {
  region = var.region
}

provider "docker" {
  registry_auth {
    address  = local.ecr_url
    username = data.aws_ecr_authorization_token.token.user_name
    password = data.aws_ecr_authorization_token.token.password
  }
}

# create ECR repository
resource "aws_ecr_repository" "main" {
  name = "nycat-web"
}


# build docker images
resource "docker_registry_image" "main" {
  name = "${aws_ecr_repository.main.repository_url}:${var.release_version}"
  build {
    context  = "../"
    platform = "linux/amd64"
    build_args = {
      RELEASE_VERSION = var.release_version
    }
  }
}
