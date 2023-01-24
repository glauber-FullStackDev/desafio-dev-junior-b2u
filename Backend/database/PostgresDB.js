
import pg from "pg";

const { Pool } = pg;

export const Connect = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'teste',
    password: 'admin',
})

