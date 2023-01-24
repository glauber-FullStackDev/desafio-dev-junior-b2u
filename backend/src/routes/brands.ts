import { Router } from "express";
import allBrandsController from "../controllers/brands/all-brands-controller";
import createBrandController from "../controllers/brands/create-brand-controller";
import deleteBrandController from "../controllers/brands/delete-brand-controller";
import updateBrandController from "../controllers/brands/update-brand-controller";

const routeBrands = Router();

routeBrands
  .get("/brands", allBrandsController)
  .post("/brands", createBrandController)
  .put("/brands/:id", updateBrandController)
  .delete("/brands/:id", deleteBrandController);

export { routeBrands };
