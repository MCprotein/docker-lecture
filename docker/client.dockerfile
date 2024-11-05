FROM node:20.18-slim AS build

WORKDIR /app

COPY ./client .
COPY ./nginx ./nginx

RUN npm ci --omit=dev
RUN npm run build

FROM node:20.18-slim AS deploy

WORKDIR /app

COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static

CMD ["node", "server.js"]