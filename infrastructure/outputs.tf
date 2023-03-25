output "version" {
  description = "the version"
  value       = var.release_version
}

output "alb_hostname" {
  value = aws_alb.main.dns_name
}
