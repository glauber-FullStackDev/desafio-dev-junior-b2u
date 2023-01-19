import db from "../database.js";

async function CreateUser(email, passwordHash, name, number) {
  return db.query(
    `INSERT INTO users (name, email, number, password) VALUES ($1, $2, $3, $4)`,
    [name, email, number, passwordHash]
  );
}

async function FindUser(email) {
  return db.query(`SELECT * FROM users WHERE email = $1;`, [email]);
}

async function Login(token, userid) {
  return db.query(`INSERT INTO sessions (token, userid) VALUES ($1, $2)`, [
    token,
    userid,
  ]);
}

async function FindToken(token) {
  return db.query(
    `SELECT
  *
FROM sessions
WHERE token = $1
  AND active = TRUE;`,
    [token]
  );
}

async function Finish(token) {
  return db.query(`UPDATE sessions SET active = FALSE WHERE token = $1;`, [
    token,
  ]);
}

export { CreateUser, FindUser, Login, FindToken, Finish };