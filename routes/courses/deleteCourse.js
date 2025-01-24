import DatabasePostgreSQL from "../../PostgreDB.js";
const fromDb = new DatabasePostgreSQL()

export default async function deleteCourse(server) {
  server.delete("/course/:id", async (req, res) => {
    const userId = req.params.id

    const response = await fromDb.deleteCourse(userId)
    return response 
  })
}