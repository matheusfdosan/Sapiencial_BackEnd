import DatabasePostgreSQL from "../../PostgreDB.js";
const fromDb = new DatabasePostgreSQL()

export default async function checkingLogin(server) {
  server.get("/login/:email/:password", async (req, res) => {
    const email = req.params.email
    const password = req.params.password

    const response = await fromDb.checkingLogin(email, password)
    return response
  })
}