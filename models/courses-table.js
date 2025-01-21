import sql from "../db.js"

sql`CREATE TABLE courses (
  id            TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  description   TEXT NOT NULL,
  body          TEXT NOT NULL,
  teacher       TEXT NOT NULL,
  students      TEXT NOT NULL, 
  rate          TEXT NOT NULL,
  comments      TEXT NOT NULL,
  created_at    TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (teacher) REFERENCES users(id)
);`.then(() => {
    console.log("Table Courses Created!")
    process.exit()
  })
  .catch((err) => {
    console.log("Error to create table: " + err)
    process.exit()
  })