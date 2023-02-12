import { createPool } from "mysql";

const pool = createPool({
  host: "73.32.165.191",
  user: "midware",
  password: "password",
  connectionLimit: 10,
});

export default pool;
