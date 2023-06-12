import { Router } from "express";
import { createMochila, deleteMochila, getMochila, getMochilas, updateMochila } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getMochilas)
router.get('/:id_producto', getMochila)
router.post('/', validarProducto,   createMochila)
router.put('/:id_producto', validarProducto, updateMochila)
router.delete('/:id_producto', deleteMochila)

export default router;
