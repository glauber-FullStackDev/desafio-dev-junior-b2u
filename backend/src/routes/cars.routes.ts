import { Router } from "express";
import { ListCarController } from "../controllers/ListCarController";
import { CreateCarController } from "../controllers/CreateCarController";
import { EditCarController } from "../controllers/EditCarController";
import { DeleteCarController } from "../controllers/DeleteCarController";

const listCarController = new ListCarController();
const createCarController = new CreateCarController();
const editCarController = new EditCarController();
const deleteCarController = new DeleteCarController();

const router = Router();

router.get("/", listCarController.handle);

router.post("/", createCarController.handle);

router.put("/", editCarController.handle);

router.delete("/", deleteCarController.handle);



export { router };
