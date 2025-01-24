import DatabasePostgreSQL from "../../PostgreDB.js"
const fromDb = new DatabasePostgreSQL()

export default async function getAllCourses(server) {
  server.get("/courses/:level", async (req, res) => {
    const level = Number(req.params.level)

    const response = await fromDb.getAllCourses(15, 15 * level)
    return response
  })
}
