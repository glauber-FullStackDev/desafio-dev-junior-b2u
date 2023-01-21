import { Router } from "express";
import allBrandsController from "../controllers/brands/allBrands";

const routerBrand = Router();

routerBrand.get("/brands", allBrandsController);

export { routerBrand };
