# logs.tf

# Set up CloudWatch group and log stream and retain logs for 30 days
resource "aws_cloudwatch_log_group" "nycat-web" {
  name              = "/ecs/nycat-web"
  retention_in_days = 30

  tags = {
    Name = "cb-log-group"
  }
}

resource "aws_cloudwatch_log_stream" "nycat-web" {
  name           = "nycat-web"
  log_group_name = aws_cloudwatch_log_group.nycat-web.name
}
