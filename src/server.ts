import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";
const app = Fastify();

app.register(cors);
app.register(appRoutes);

app
  .listen({
    port: 3000,
    host: "192.168.200.12",
  })
  .then(() => {
    console.log("🚀 Server Running...");
  });
