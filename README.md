# FHIR Frontend
A web application to demo FHIR Service

## Docker
### Pull Docker Image
This repository contains a GitHub Action workflow that deploy's each release.

```sh
docker pull ghcr.io/alan-kuan/fhir-frontend:latest
```

### Build Docker Image
It creates a docker image of the web app.

```sh
docker build .
```

## Project
- Node Version: 16
- Package Manager: pnpm
- Frontend Tooling: vite
- Web Framework: svelte

### Install Dependencies
```sh
pnpm install
```

### Build
It generates the built web app at `./dist`.

```sh
pnpm build
```

### Develop
It starts a vite dev server.

```sh
pnpm dev
```
