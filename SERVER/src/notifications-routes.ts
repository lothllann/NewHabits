import { FastifyInstance } from "fastify";
import WebPush from "web-push";
import { z } from "zod";

const publicKey =
  "BG9qaoUHb0f4dNFEr-k0LfpQamUrw5GMDAXuTo9ZI-LMbaPtlLrQelAcdeDEwx4dMy3npxKSj2bjhLHOJGg4LHo";
const privateKey = "IeQlseBi0Q0X-_PFYoEYR5ZvMPvCoFmJITWJ_XyRwSo";

// const { publicKey, privateKey } = WebPush.generateVAPIDKeys();

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey);

export async function notification(app: FastifyInstance) {
  app.get("/push/public_key", () => {
    return { publicKey };
  });

  app.post("/push/register", (request, reply) => {
    // console.log(request.body)
    return reply.status(201).send();
  });

  app.post("/push/send", async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushBody.parse(request.body);
    WebPush.sendNotification(subscription, "hello there");

    return reply.status(201).send();
  });
}
