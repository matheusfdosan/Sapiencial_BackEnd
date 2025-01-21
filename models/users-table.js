import sql from "../db.js"

sql`CREATE TABLE users (
  id          TEXT PRIMARY KEY,
  username    TEXT NOT NULL,
  email       TEXT NOT NULL UNIQUE,
  password    TEXT NOT NULL,
  cpf         VARCHAR(14) UNIQUE NOT NULL,
  type        TEXT NOT NULL,
  CURSES      TEXT NOT NULL,
  country     TEXT ,
  created_at TIMESTAMP DEFAULT NOW()
);`
  .then(() => {
    console.log("Table Users Created!")
    process.exit()
  })
  .catch((err) => {
    console.log("Error to create table: " + err)
    process.exit()
  })
