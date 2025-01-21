import fastify from "fastify"
const server = fastify()

import newUser from "./routes/users/newUser.js"
server.register(newUser)

import getUser from "./routes/users/getUser.js"
server.register(getUser)

import checkingLogin from "./routes/users/checkingLogin.js"
server.register(checkingLogin)

import updateUser from "./routes/users/updateUser.js"
server.register(updateUser)

import deleteUser from "./routes/users/deleteUser.js"
server.register(deleteUser)

import newCourse from "./routes/courses/newCourse.js"
server.register(newCourse)

server.listen({ port: process.env.PORT ?? 1111, host: "0.0.0.0" }).then(() => {
  console.log(`Server Running on http://localhost:${process.env.PORT ?? 1111}/`)
})
