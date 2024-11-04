FROM node:20.18-slim AS build

WORKDIR /app

COPY ./server .

RUN npm ci
RUN npm run build

FROM node:20.18-slim AS deploy

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY --from=build /app/dist /app/dist
COPY --from=build /app/prisma /app/prisma
COPY --from=build /app/package.json /app/package.json
COPY --from=build /app/package-lock.json /app/package-lock.json
COPY --from=build /app/scripts /app/scripts

RUN npm ci --omit=dev

CMD ["sh", "/app/scripts/bootstrap.sh"]