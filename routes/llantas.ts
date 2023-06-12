import { Router } from "express";
import { createLlanta, deleteLlanta, getLlanta, getLlantas, updateLlanta } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getLlantas)
router.get('/:id_producto', getLlanta)
router.post('/', validarProducto,   createLlanta)
router.put('/:id_producto', validarProducto, updateLlanta)
router.delete('/:id_producto', deleteLlanta)

export default router;
