import { Router } from "express";
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/product';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validar-campos-product";

const router = Router();
router.use( validarJWT );

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', validarProducto,   createProduct)
router.put('/:id', validarProducto, updateProduct)
router.delete('/:id', deleteProduct)

export default router;
