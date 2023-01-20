import { Router } from "express";

//user controllers
import { createUserController } from "../controllers/user/createUser.controller";
import { deleteUserController } from "../controllers/user/deleteUser.controller";
import { readAllUserController } from "../controllers/user/readAllUser.controller";
import { readOneUserController } from "../controllers/user/readOneUser.controller";
import { updateUserController } from "../controllers/user/updateUser.controller";

//user middlewares
import { uniqueEmailPhoneMiddleware } from "../middlewares/user/uniqueEmailPhone.middleware";
import { bodyRequestMiddleware } from "../middlewares/user/bodyRequest.middleware";
import { userNotFoundMiddleware } from "../middlewares/user/userNotFound.middleware";


//car controllers 
import { createCarController } from "../controllers/car/createCar.controller";
import { readAllCarController } from "../controllers/car/readAllCar.controller";
import { readOneCarController } from "../controllers/car/readOneCar.controller";
import { deleteCarController } from "../controllers/car/deleteCar.controller";
import { updateCarController } from "../controllers/car/updateCar.controller";

// car middlewares
import { carNotFoundMiddleware } from "../middlewares/car/carNotFound.middleware";
import { ownerCarNotFoundMiddleware } from "../middlewares/car/ownerCarNotFound.middleware";
import { bodyRequestCarMiddleware } from "../middlewares/car/bodyRequestCar.middleware";

const router = Router()

// user routes
router.post('/users',bodyRequestMiddleware,uniqueEmailPhoneMiddleware,createUserController);
router.get('/users',readAllUserController);
router.get('/users/:id',userNotFoundMiddleware,readOneUserController);
router.delete('/users/:id',userNotFoundMiddleware,deleteUserController);
router.patch('/users/:id',userNotFoundMiddleware,uniqueEmailPhoneMiddleware,updateUserController);


// car routes
router.post('/cars',bodyRequestCarMiddleware,ownerCarNotFoundMiddleware,createCarController);
router.get('/cars',readAllCarController);
router.get('/cars/:id',carNotFoundMiddleware,readOneCarController);
router.delete('/cars/:id',carNotFoundMiddleware,deleteCarController);
router.patch('/cars/:id',carNotFoundMiddleware,ownerCarNotFoundMiddleware,updateCarController);





export default router



