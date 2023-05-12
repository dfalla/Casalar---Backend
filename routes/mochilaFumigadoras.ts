import { Router } from "express";
import { createMochila, deleteMochila, getMochila, getMochilas, updateMochila } from '../controllers/mochilaFumigadora';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getMochilas)
router.get('/:id', getMochila)
router.post('/', validarProducto,   createMochila)
router.put('/:id', validarProducto, updateMochila)
router.delete('/:id', deleteMochila)

export default router;
