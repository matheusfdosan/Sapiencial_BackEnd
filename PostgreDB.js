import { randomUUID } from "node:crypto"
import sql from "./db.js"

export default class DatabasePostgreSQL {
  async newUser(userData) {
    const newId = randomUUID()
    const { username, email, password, cpf, type, courses, studying, country } =
      userData

    try {
      await sql`INSERT INTO users (id, username, email, password, cpf, type, studying, courses, country) VALUES (${newId}, ${username}, ${email}, ${password}, ${cpf}, ${type}, ${studying}, ${courses}, ${country});`

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
      console.log(email, password)
      const response =
        await sql`SELECT id FROM users WHERE email = ${email} AND password = ${password}`

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

  async updateUser(userId, updatedInfo) {
    try {
      const { username, type, courses, country } = updatedInfo
      await sql`UPDATE users SET username = ${username}, type = ${type}, courses = ${courses}, country = ${country} WHERE id = ${userId}`

      return {
        sucess: true,
        message: "Updates made successfully",
      }
    } catch (err) {
      console.log("Error updates: " + err)
      return {
        sucess: false,
        message: "Error updates",
      }
    }
  }

  async deleteUser(userId) {
    try {
      await sql`DELETE FROM users WHERE id = ${userId}`

      return {
        sucess: true,
        message: "User Deleted Successfully",
      }
    } catch (err) {
      console.log("Error to delete user: " + err)
      return {
        sucess: false,
        message: "Error to Delete User",
      }
    }
  }

  // -------------- Course --------------

  async newCourse(course) {
    try {
      const courseId = randomUUID()
      const { title, description, body, teacher, students, rate, comments } =
        course
      await sql`INSERT INTO courses (id, title, description, body, teacher, students, rate, comments) VALUES (${courseId}, ${title}, ${description}, ${body}, ${teacher}, ${students}, ${rate}, ${comments});`

      console.log("New Course Created: " + title)

      return {
        sucess: true,
        message: "New Course Created",
      }
    } catch (err) {
      console.log("Error Course:" + err)
      return {
        sucess: false,
        message: "Error Course",
      }
    }
  }

  async getCourse(id) {
    try {
      const response = await sql`SELECT * FROM courses WHERE id = ${id}`
      return {
        sucess: true,
        res: response,
      }
    } catch (err) {
      console.log("Error Get Course:" + err)
      return {
        success: false,
        res: "Error Get Course",
      }
    }
  }

  async getAllCourses(level, offset) {
    const response =
      await sql`SELECT * FROM courses LIMIT ${level} OFFSET ${offset}`
    return response
  }

  async editCourse(courseId, updatedCourse) {
    try {
      const { title, description, body, teacher, students, rate, comments } =
        updatedCourse

      await sql`UPDATE courses SET title = ${title}, description = ${description}, body = ${body}, teacher = ${teacher}, students = ${students}, rate = ${rate}, comments = ${comments} WHERE id = ${courseId};`
      return {
        success: true,
        message: "Course updated successfully",
      }
    } catch (err) {
      console.log("Error to Update Course: " + err)
      return {
        sucess: false,
        message: "Error to Update Course",
      }
    }
  }

  async deleteCourse(courseId) {
    try {
      await sql`DELETE FROM courses WHERE id = ${courseId}`
   
      return {
        sucess: true,
        message: "Course Deleted Successfully",
      }
    } catch (err) {
      console.log("Error to delete course: " + err)
      return {
        sucess: false,
        message: "Error to Delete Course",
      }
    }
  }
}
