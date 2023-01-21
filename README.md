![Bitcointoyou](https://bitcointoyou.com/_next/static/media/logoAzul.c6609791.png)

## 🛠️Setup Locally

> :information_source: You don't need to use the exact CLI commands that will be shown in the following steps. They are only suggestions, once it's the author's preference.

1. Clone the project (using `gh` CLI)

```
gh repo clone esau-morais/turbo-b2u
```

2. Install the dependencies (using `pnpm`)

> :information_source: For convention, `pn` is the alias for `pnpm`

```
pn install
```

3. Preparing the database

To make sure that everything works, change the `.env.example` file name to `.env`. Once you've done that, run:

```
pn prisma db push
```

After that, Prisma recommends creating an instance to the client by running the command as it shows down below:
```
pn prisma generate
```

4. Run client-side and server-side simultaneously 

```
pn dev
```

5. Extra: Testing

Test scripts were not stored at the `package.json`, so it is necessary to run based on the testing library and directly on each directory 

1. `web` 

```
cd apps/web && pn vitest
```

2. `server`

```
cd apps/server pn jest
```

## LICENSE

For more information, please check the `LICENSE` file at the root of the project
