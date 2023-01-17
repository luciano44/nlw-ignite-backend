import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log("🚀 Server Running...");
  });

const person = {
  name: "bob",
  age: 22,
  realjob: "unemployed",
};
