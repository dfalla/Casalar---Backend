import { Router } from "express";
import { createMotosierra, deleteMotosierra, getMotosierra, getMotosierras, updateMotosierra } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getMotosierras)
router.get('/:id', getMotosierra)
router.post('/', validarProducto,   createMotosierra)
router.put('/:id', validarProducto, updateMotosierra)
router.delete('/:id', deleteMotosierra)

export default router;
