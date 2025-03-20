import { initTRPC } from "@trpc/server";
const ideas = [
 { nike: "idea-nike-1", title: "idea 1 title", description: "idea 1 desc" },
 { nike: "idea-nike-2", title: "idea 2 title", description: "idea 2 desc" },
 { nike: "idea-nike-3", title: "idea 3 title", description: "idea 3 desc" },
];

const trpc = initTRPC.create();
export const trpcRouter = trpc.router({
 getIdeas: trpc.procedure.query(() => {
  return { ideas };
 }),
});

export type TrpcRouter = typeof trpcRouter;
