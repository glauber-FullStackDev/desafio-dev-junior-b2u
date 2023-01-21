import { Router } from "express";
import allBrandsController from "../controllers/brands/allBrands";

const routeBrands = Router();

routeBrands.get("/brands", allBrandsController);

export { routeBrands };
