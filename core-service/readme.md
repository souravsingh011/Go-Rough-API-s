initialize a TypeScript project and add the Prisma CLI as a development dependency to it---
npm init -y
npm install prisma typescript ts-node @types/node --save-dev

initialize TypeScript---
npx tsc --init

invoke the Prisma CLI---
npx prisma

set up your Prisma ORM---
npx prisma init

To map your data model to the database schema---
npx prisma migrate dev --name init

get started with Prisma Client---
npm install @prisma/client

run the code with this command---
npx ts-node index.ts

Setup for Prisma is completed------------------------------------------------
