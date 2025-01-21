import fastify from "fastify"
const server = fastify()

import newUser from "./routes/users/newUser.js"
server.register(newUser)

import getUser from "./routes/users/getUser.js"
server.register(getUser)

server.listen({ port: process.env.PORT ?? 1111, host: "0.0.0.0" }).then(() => {
  console.log(`Server Running on http://localhost:${process.env.PORT ?? 1111}/`);
})
