# FHIR Frontend
A web application to demo FHIR Service

## Screenshot
![home page.jpg](https://github.com/Alan-Kuan/fhir-frontend/assets/24734750/55b9ead4-55dc-464b-b1fd-8fe3e7cab839)

## Docker
### Pull Docker Image
This repository contains a GitHub Action workflow that deploys each release.

```sh
docker pull ghcr.io/alan-kuan/fhir-frontend:latest
```

### Build Docker Image
It creates a docker image of the web app.

```sh
docker build -t <tag> .
```

## Project
- Node Version: 16
- Package Manager: pnpm
- Frontend Tooling: Vite
- Web Framework: Svelte

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
