import pg from 'pg'

const { Pool } = pg

const config = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    db: process.env.DB_SSL
  }
}

const pool = new Pool(config)

const db = (query, values) => pool
  .query(query, values)
  .then(({ rows }) => rows)
  .catch((error) => error)

export default db
