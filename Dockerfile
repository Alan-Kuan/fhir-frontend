FROM node:16-alpine as build-stage
RUN npm install -g pnpm
WORKDIR /build
COPY . .
RUN pnpm install
RUN pnpm build

FROM nginx:alpine as production-stage
COPY --from=build-stage /build/dist /usr/share/nginx/html

EXPOSE 80
