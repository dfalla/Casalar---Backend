import { Router } from "express";
import { createLlanta, deleteLlanta, getLlanta, getLlantas, updateLlanta } from '../controllers/llanta';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getLlantas)
router.get('/:id', getLlanta)
router.post('/', validarProducto,   createLlanta)
router.put('/:id', validarProducto, updateLlanta)
router.delete('/:id', deleteLlanta)

export default router;
