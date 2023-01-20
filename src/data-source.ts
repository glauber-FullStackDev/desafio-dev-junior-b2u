import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
      }
    : {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl:
          process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        logging: true,
        synchronize: false,
        entities:
          process.env.NODE_ENV === "production"
            ? ["dist/entities/*.entity.js"]
            : ["src/entities/*.entity.ts"],
        migrations:
          process.env.NODE_ENV === "production"
            ? ["dist/migrations/*.js"]
            : ["src/migrations/*.ts"],
      }
);
AppDataSource.initialize().then(() => {
  console.log("DATABASE CONECTED WITH SUCCESS");
});

export default AppDataSource;
