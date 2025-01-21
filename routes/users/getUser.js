import DatabasePostgreSQL from "../../PostgreDB.js"
const fromDb = new DatabasePostgreSQL()

export default async function getUser(server) {
  server.get("/profile/:id", async (req, res) => {
    const userId = req.params.id

    const response = await fromDb.getUser(userId)
    return response
  })
}
