import DatabasePostgreSQL from "../../PostgreDB.js";
const fromDb = new DatabasePostgreSQL()

export default async function newUser(server) {
  server.post("/new-user", async (req, res) => {
    const userData = req.body

    const response = await fromDb.newUser(userData)
    return response
  })
}