# Blog Nest

> A NestJS backend project demonstrating modular server-side application architecture with TypeScript.

## Overview

Blog Nest is a backend learning and development project built with NestJS. The repository is based on the standard NestJS application structure and is intended to demonstrate controllers, services, modules, validation and testable server-side architecture.

## Technology Stack

- NestJS
- TypeScript
- Node.js
- Jest
- Supertest
- ESLint
- Prettier

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
Data / Domain Layer
    |
    v
HTTP Response
```

NestJS modules keep related functionality isolated and make the application easier to extend and test.

## Development

```bash
npm install
npm run start:dev
```

## Testing

```bash
npm run test
npm run test:e2e
npm run test:cov
```

## Engineering Value

This repository demonstrates the transition from basic Node/Express development toward **NestJS modular architecture, TypeScript, dependency injection and automated backend testing**.

## Future Improvements

- Complete blog domain/API documentation
- Persistent database integration where required
- Authentication and authorization
- Swagger/OpenAPI documentation
- Docker support
- CI/CD

## Author

**Oluwatobi843**  
https://github.com/Oluwatobi843
