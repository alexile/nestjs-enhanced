# @enhanced-nestjs/ts-config

A strict, consistent `tsconfig.json` for NestJS applications, designed to enforce best practices and enhance the reliability of your TypeScript codebase.

## Installation

To install this package, you can use either Yarn or npm:

```bash
yarn add @enhanced-nestjs/ts-config
```

or

```bash
npm install @enhanced-nestjs/ts-config
```

## Usage

To use this `tsconfig` in your NestJS project, you can extend it in your `tsconfig.json` file:

```json
{
  "extends": "@enhanced-nestjs/ts-config"
}
```

and `tsconfig.build.json`:

```json
{
  "extends": "@enhanced-nestjs/ts-config",
  "exclude": ["node_modules", "test", "dist", "**/*spec.ts"]
}
```

By extending this configuration, your project will adhere to a strict set of TypeScript rules designed to improve code quality and maintainability.

## Features

This strict `tsconfig.json` includes settings such as:

- **Strict Type Checking**: Enforces strict type checks, including explicit `any` declarations.
- **Enhanced Code Safety**: Ensures non-trivial checks like unused locals and parameters, consistent casing, and unused labels.
- **Decorator Support**: Includes support for decorators which are often used in NestJS applications.
- **ECMAScript Next**: Utilizes modern JavaScript features by targeting ESNext.
- **CommonJS Module**: Uses CommonJS module system, consistent with most Node.js applications.
- **Source Mapping**: Generates source maps for easier debugging.
- **Incremental Compilation**: Speeds up the build process through incremental compilation.

## Requirements

This configuration requires TypeScript version >4.0.0.

## License

This package is licensed under the MIT License.

## Contributing

Contributions are welcome! Please create an issue or submit a pull request.
