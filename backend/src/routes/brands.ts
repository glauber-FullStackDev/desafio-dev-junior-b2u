import { Router } from "express";
import allBrandsController from "../controllers/brands/all-brands-controller";

const routeBrands = Router();

routeBrands.get("/brands", allBrandsController);

export { routeBrands };
