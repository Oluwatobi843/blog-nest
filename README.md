# Blog Nest

> A NestJS backend project demonstrating modular server-side architecture with TypeScript, dependency injection and automated testing.

## Overview

Blog Nest is a NestJS-based backend project created around the framework's modular application architecture. It demonstrates how HTTP controllers, services, modules and validation can be organized into maintainable server-side components.

The repository is also useful as a progression project from traditional Node.js/Express development toward structured NestJS backend engineering.

## Technology stack

| Area | Technology |
|---|---|
| Framework | NestJS |
| Language | TypeScript |
| Runtime | Node.js |
| Unit testing | Jest |
| E2E testing | Supertest |
| Code quality | ESLint / Prettier |

## Architecture

```text
HTTP Request
     |
     v
Controller
     |
     v
Service / Business Logic
     |
     v
Domain / Data Layer
     |
     v
HTTP Response
```

NestJS modules keep related functionality isolated while dependency injection makes services easier to compose and test.

## Project concepts

The project demonstrates:

- NestJS modules
- Controllers and route handlers
- Injectable services
- Dependency injection
- DTO-oriented request handling
- Unit testing
- End-to-end testing
- TypeScript backend development

## Installation

```bash
git clone https://github.com/Oluwatobi843/blog-nest.git
cd blog-nest
npm install
```

## Development

```bash
npm run start:dev
```

Build the application with:

```bash
npm run build
```

Run the production build with:

```bash
npm run start:prod
```

## Testing

### Unit tests

```bash
npm run test
```

### End-to-end tests

```bash
npm run test:e2e
```

### Coverage

```bash
npm run test:cov
```

## Engineering value

Blog Nest demonstrates the transition from basic Express-style API development toward **NestJS modular architecture, TypeScript, dependency injection and testable backend services**.

## Roadmap

Potential future development includes:

- Complete blog-domain/API documentation
- Persistent database integration
- Authentication and authorization
- Swagger/OpenAPI documentation
- Docker support
- CI/CD
- Production logging and observability

## Author

**Oluwatobi843**

GitHub: https://github.com/Oluwatobi843
