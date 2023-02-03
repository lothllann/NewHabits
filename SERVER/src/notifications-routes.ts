import { FastifyInstance } from "fastify";
import WebPush from 'web-push'

const {publicKey, privateKey} = WebPush.generateVAPIDKeys();

// const publicKey ='BG9qaoUHb0f4dNFEr-k0LfpQamUrw5GMDAXuTo9ZI-LMbaPtlLrQelAcdeDEwx4dMy3npxKSj2bjhLHOJGg4LHo'
// const privateKey ='IeQlseBi0Q0X-_PFYoEYR5ZvMPvCoFmJITWJ_XyRwSo'

export async function notification(app: FastifyInstance) {
  
}