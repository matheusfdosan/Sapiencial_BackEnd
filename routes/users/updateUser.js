import DatabasePostgreSQL from "../../PostgreDB.js";
const fromDb = new DatabasePostgreSQL()

export default async function updateUser(server) {
  server.put("/profile/:id", async (req, res) => {
    const userId = req.params.id
    const updatedInfo = req.body

    const response = await fromDb.updateUser(userId, updatedInfo)
    return response
  })

}