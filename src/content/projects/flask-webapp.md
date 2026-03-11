---
title: "Flask REST Platform — Dockerized Web Service"
titleZh: "Flask REST 平台 — Docker 化 Web 服务"
description: "Full-stack web application built with Flask and MongoDB, containerized with Docker Compose. Features a comprehensive REST API supporting CRUD operations with authentication and rate limiting."
descriptionZh: "基于 Flask 和 MongoDB 构建的全栈 Web 服务，通过 Docker Compose 容器化一键部署，提供完整的 REST API、用户鉴权、CRUD 操作及请求速率限制。"
date: "2025-05"
tags: ["Python", "Flask", "PyMongo", "MongoDB", "Docker", "Docker Compose", "REST API"]
featured: false
github: "https://github.com/Michaelliu1017"
category: "full-stack"
---

## Overview

A production-ready web service built with **Flask** and **MongoDB**, fully containerized using **Docker Compose** for reproducible deployments. The platform provides a comprehensive REST API with user authentication, data validation, and structured error handling.

## Architecture

### Backend Stack
- **Flask** application server with Blueprint-based route organization
- **PyMongo** for idiomatic MongoDB interaction with connection pooling
- **Docker Compose** orchestrating Flask app + MongoDB containers

### API Design
- RESTful endpoints following consistent resource naming conventions
- JSON request/response with schema validation middleware
- JWT-based authentication with refresh token rotation
- Rate limiting per user/IP to prevent abuse

### Data Layer
- MongoDB document schema design optimized for read-heavy workloads
- Indexed fields for common query patterns
- Aggregation pipelines for analytics endpoints

## Features

- **CRUD operations** for core resources with full validation
- **User authentication** — registration, login, JWT token management
- **File uploads** with size/type validation and storage management
- **Pagination** on list endpoints with configurable page size
- **Health check** endpoint for container orchestration readiness probes

## Deployment

```bash
docker-compose up -d
```

Single command spins up the complete stack including MongoDB with seeded data for development.
