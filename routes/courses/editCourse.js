import DatabasePostgreSQL from "../../PostgreDB.js"
const fromDb = new DatabasePostgreSQL()

export default async function editCourse(server) {
  server.put("/course/:id", async (req, res) => {
    const courseId = req.params.id
    const updatedCourse = req.body
    
    const response = await fromDb.editCourse(courseId, updatedCourse)
    return response
  })
}