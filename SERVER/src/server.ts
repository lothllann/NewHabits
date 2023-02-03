import Fastify from "fastify";
import cors from '@fastify/cors'
import { appRoutes } from "./routes";
import { notification } from "./notifications-routes";

const app = Fastify();
app.register(cors)
app.register(appRoutes)
app.register(notification)



app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Servidor rodando");
  });