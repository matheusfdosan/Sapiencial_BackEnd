import DatabasePostgreSQL from "../../PostgreDB.js";
const fromDb = new DatabasePostgreSQL()

export default async function deleteUser(server) {
  server.delete("/profile/:id", async (req, res) => {
    const userId = req.params.id
    console.log(userId);

    const response = await fromDb.deleteUser(userId)
    return response 
  })
}