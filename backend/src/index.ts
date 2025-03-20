import express from "express";
import * as trpsExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";
import cors from "cors";

const app = express();
app.use(cors());
app.use(
 "/trpc",
 trpsExpress.createExpressMiddleware({
  router: trpcRouter,
 })
);

app.listen(3000, () => {
 console.warn("Listening on http://localhost:3000");
});
