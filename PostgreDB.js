import { randomUUID } from "node:crypto"
import sql from "./db.js"

export default class DatabasePostgreSQL {
  async newUser(userData) {
    const newId = randomUUID()
    const { username, email, password, cpf, type, courses, country } = userData

    try {
      await sql`INSERT INTO users (id, username, email, password, cpf, type, courses, country) VALUES (${newId}, ${username}, ${email}, ${password}, ${cpf}, ${type}, ${courses}, ${country});`

      console.log("New account created: " + email, "-", type)
      return {
        sucess: true,
        userId: newId,
        message: "User Created Successful!",
      }
    } catch (err) {
      console.log("Error to send user data to database: " + err)
      return {
        sucess: false,
        message: "Error to Create New User",
      }
    }
  }

  async getUser(userId) {
    try {
      const response = await sql`SELECT * FROM users WHERE id = ${userId};`
      return response
    } catch (err) {
      console.log("Error to get user data from database: " + err)
      return {
        sucess: false,
        message: "Error to Get User Data",
      }
    }
  }

  async checkingLogin(email, password) {
    try {
      console.log(email,password);
      const response = await sql`SELECT id FROM users WHERE email = ${email} AND password = ${password}`

      console.log("Login made by: " + email)

      return {
        access: true,
        userId: response[0].id,
        message: "Login successfully!",
      }
    } catch (err) {
      console.log("Error to check login: " + err)
      return {
        access: false,
        message: "Error login!",
      }
    }
  }
}
