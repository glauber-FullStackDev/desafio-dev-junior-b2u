import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

(async () => {
  const PORT = "8000";

  await AppDataSource.initialize().catch((err) => {
    console.error("Error during Data Source initialization", err);
  });

  app.listen(process.env.PORT || PORT, () => {
    console.log(`Servidor executado no localhost ${PORT}`);
  });
})();
