resource "aws_ecs_cluster" "main" {
  name = "nycat-web"
}

resource "aws_ecs_task_definition" "app" {
  family                   = "nycat-web"
  execution_role_arn       = aws_iam_role.ecs_task_execution_role.arn
  network_mode             = "awsvpc"
  requires_compatibilities = ["FARGATE"]
  cpu                      = var.fargate_cpu
  memory                   = var.fargate_memory
  container_definitions = jsonencode([
    {
      name        = "nycat-web"
      image       = "${aws_ecr_repository.main.repository_url}:${var.release_version}"
      cpu         = var.fargate_cpu
      memory      = var.fargate_memory
      networkMode = "awsvpc"
      environment = [
        {
          name  = "RELEASE_VERSION"
          value = var.release_version
        }
      ]
      logConfiguration = {
        logDriver : "awslogs"
        options : {
          awslogs-group : "/ecs/nycat-web"
          awslogs-region : var.region
          awslogs-stream-prefix : "ecs"
        }
      }
      portMappings = [
        {
          containerPort = var.app_port
          hostPort      = var.app_port
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "main" {
  name            = "nycat-web"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    security_groups  = [aws_security_group.ecs_tasks.id]
    subnets          = aws_subnet.private.*.id
    assign_public_ip = true
  }

  load_balancer {
    target_group_arn = aws_alb_target_group.app.id
    container_name   = "nycat-web"
    container_port   = var.app_port
  }

  depends_on = [aws_alb_listener.front_end, aws_iam_role_policy_attachment.ecs_task_execution_role]
}
