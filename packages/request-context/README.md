# @enhanced-nestjs/request-context

![npm (scoped)](https://img.shields.io/npm/v/@enhanced-nestjs/request-context)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@enhanced-nestjs/request-context)
![NPM](https://img.shields.io/npm/l/@enhanced-nestjs/request-context)

## Overview

`@enhanced-nestjs/request-context` is a lightweight context service for NestJS applications leveraging the `async_hooks` feature in Node.js. It provides a structured way to handle and propagate request-specific data across different parts of your application, without having to rely on manual context passing.

## Features

- Based on Node.js's `async_hooks` API for efficient context handling.
- Simple API to set, get, check, and delete the request context.
- Provides isolation of request data in asynchronous environments.
- Designed specifically for NestJS but can be adapted for other frameworks.

## Installation

To use this library, you'll need Node.js and Yarn set up in your project. Install the package using Yarn:

```sh
yarn add @enhanced-nestjs/request-context
```

Or using npm:

```sh
npm install @enhanced-nestjs/request-context
```

## Peer Dependencies

Make sure you have the following peer dependencies installed in your project:

- TypeScript `>4.0.0`

## Usage

Here's a basic example of how to use the `RequestContextService` in a NestJS application.

### Basic Example

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { RequestContextService } from '@enhanced-nestjs/request-context';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  constructor(private readonly requestContextService: RequestContextService<{userId: string, token: string}>) {}

  use(req: Request, res: Response, next: Function) {
    this.requestContextService.set({ userId: req.headers['x-user-id'], token: req.headers['Authorization'] });
    next();
  }
}
```

### Accessing the Context

You can access the context from anywhere in your application's flow, as long as you are in the same async boundary.

```typescript
import { Injectable } from '@nestjs/common';
import { RequestContextService } from '@enhanced-nestjs/request-context';

@Injectable()
export class SomeService {
  constructor(private readonly requestContextService: RequestContextService<{userId: string, token: string}>) {}

  someFunction() {
    const context = this.requestContextService.get();
    if (context) {
      console.log(`Current User ID: ${context.userId}`);
    }
  }
}
```

### API

- **set(value: T): void**: Sets the context value for the current async operation.
- **get(): T | undefined**: Retrieves the current context value.
- **has(): boolean**: Checks if the context is currently set.
- **delete(): void**: Deletes the current context.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.