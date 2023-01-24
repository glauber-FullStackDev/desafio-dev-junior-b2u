
import express from 'express'

import { getCars, addCars, updateCar, getUserById, deleteCar } from "../controllers/ProductController.js";

const router = express.Router();

router.get("/carros", getCars)

router.post("/cadastrar", addCars)

router.put("/carros/:id", updateCar)

router.get("/carros/:id", getUserById)

router.delete("/carros/:id", deleteCar)

export default router;