import express from "express";
const router = express.Router();
import Car from "../models/Car.mjs";

router.post("/", async (req, res) => {
    const car = new Car(req.body);

    try {
        const insertCar = await car.save();
        res.status(201).json(insertCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const cars = await Car.find();
        res.json(cars);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.json(car);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const updateCar = await Car.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(201).json(updateCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedCar = await Car.deleteOne({ _id: req.params.id });
        res.status(201).json(deletedCar);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
