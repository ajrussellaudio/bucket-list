# Hiya

This is a travel bucket list app in Nest.JS with Prisma.

## To run it

Fork this repo ☝️

Clone your forked copy and install dependencies:

```bash
$ git clone <YOUR SSH URL>
$ cd bucket-list
$ npm install
```

Create a `.env` file in the project root:

```bash
$ touch .env
```

Add the following to that file:

```bash
DATABASE_URL="postgresql://USERNAME:PASSWORD@localhost:5432/bucket_list?schema=public"
```

...changing `USERNAME` to the username you use for your Mac, and `PASSWORD` to the password for PostgreSQL (default is `postgres`).

To setup the database by running the migrations and seeds:

```bash
$ npx prisma migrate dev
```

To start the server:

```bash
$ npm run start:dev
```

You should see one result each at http://localhost:3000/country and http://localhost:3000/city

Done.
