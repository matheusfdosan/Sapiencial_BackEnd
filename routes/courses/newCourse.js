import DatabasePostgreSQL from "../../PostgreDB.js"
const fromDb = new DatabasePostgreSQL()

export default async function newCourse(server) {
  server.post("/new-course", async (req, res) => {
    const course = req.body

    const response = await fromDb.newCourse(course)
    return response
  })
}