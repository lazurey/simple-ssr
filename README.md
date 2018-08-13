# Simple SSR

**Step 1** Server only

```bash
npm install
npm run start:server
```

**Step 2** Server & Client on same code

```bash
npm install
npm run build:client
npm run start:server
```

**Step 3** Data fetching
```bash
npm install
npm run build:client
npm run start:server
```

1. Inject initial data from server side
2. Avoid duplicated fetch at client side