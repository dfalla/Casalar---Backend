import { Router } from "express";
import { createMotosierra, deleteMotosierra, getMotosierra, getMotosierras, updateMotosierra } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getMotosierras)
router.get('/:id_producto', getMotosierra)
router.post('/', validarProducto,   createMotosierra)
router.put('/:id_producto', validarProducto, updateMotosierra)
router.delete('/:id_producto', deleteMotosierra)

export default router;
