# React Aria Storybook Demo

[![Node.js CI](https://github.com/knzbr/react-aria-storybook-demo/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/knzbr/react-aria-storybook-demo/actions/workflows/ci.yml)

A small React application demonstrating [React Aria Components](https://react-spectrum.adobe.com/react-aria/) with a `HelloWorld` component and Storybook story. The application uses Webpack with SWC for builds and TypeScript throughout its source and tool configuration.

## Requirements

- Node.js 22.18.0 or later
- npm

## Getting started

Install dependencies:

```sh
npm install
```

Start the application development server at [http://localhost:3000](http://localhost:3000):

```sh
npm run dev
```

Start Storybook at [http://localhost:6006](http://localhost:6006):

```sh
npm run storybook
```

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Webpack development server on port 3000. |
| `npm run storybook` | Start Storybook on port 6006. |
| `npm run build` | Type-check and create a production application build in `dist/`. |
| `npm run build-storybook` | Create a static Storybook build in `dist-storybook/`. |
| `npm run typecheck` | Type-check the source and TypeScript configuration files. |
| `npm run lint` | Run Biome and ESLint checks. |
| `npm run lint:fix` | Apply safe Biome fixes and ESLint auto-fixes. |

## Tooling

- **React Aria Components** provides accessible UI primitives.
- **Webpack** and **SWC** bundle and transform the application.
- **Storybook** develops and documents component stories.
- **Biome** formats code and runs its recommended lint and accessibility rules.
- **ESLint** applies Storybook-specific checks and JavaScript Standard Style-compatible spacing rules.

## Project structure

```text
src/
  components/HelloWorld/  React Aria component and Storybook story
  main.tsx                Application entry point
.storybook/               Storybook configuration
webpack.config.ts          Webpack configuration
eslint.config.ts           ESLint flat configuration
biome.json                 Biome configuration
```
