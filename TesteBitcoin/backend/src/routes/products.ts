import { Router } from 'express';
import { productController } from '../controllers/products';

const productRouter = Router();
productRouter.get('/', productController.listProducts);
productRouter.post('/', productController.insertProduct);
productRouter.delete('/:id', productController.deleteProduct);
productRouter.put('/:id', productController.updateProduct);
productRouter.get('/:id', productController.getProduct);


export { 
    productRouter,
}