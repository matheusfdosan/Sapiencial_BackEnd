import DatabasePostgreSQL from "../../PostgreDB.js";
const fromDb = new DatabasePostgreSQL()

export default async function getCourse(server) {
  server.get("/course/:id", async (req, res) => {
    const id = req.params.id

    const response = await fromDb.getCourse(id)
    return response
  })
} 