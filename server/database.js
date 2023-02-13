import { createPool } from "mysql";
import dotenv from "dotenv";

dotenv.config();

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  connectionLimit: 10,
});

export default pool;
