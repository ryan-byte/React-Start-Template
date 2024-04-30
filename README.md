# React Project Template

## Installation

To install the dependencies, run:

```bash
npm install
```

## Environment Configuration

Create `/env` folder in the root of the project. Inside this folder, create two environment configuration files:

- `development.env`
- `production.env`

In `development.env`, specify the configuration variables for your development environment. Similarly, in `production.env`, specify the configuration variables for your production environment.

## Usage

To run the project in development mode, use:

```bash
npm run start
```

This will use the `development.env` configuration file.

To build the project for production, use:

```bash
npm run build
```

This will use the `production.env` configuration file.