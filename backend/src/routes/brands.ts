import { Router } from "express";
import allBrandsController from "../controllers/brands/all-brands-controller";
import createBrandController from "../controllers/brands/create-brand-controller";

const routeBrands = Router();

routeBrands.get("/brands", allBrandsController);
routeBrands.post("/brands", createBrandController);

export { routeBrands };
