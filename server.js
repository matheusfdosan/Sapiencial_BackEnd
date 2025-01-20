import fastify from "fastify"
const server = fastify()


server.listen({ port: process.env.PORT ?? 3333, host: "0.0.0.0" })
