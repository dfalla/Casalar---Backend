import { Router } from "express";
import { createMotoguadana, deleteMotoguadana, getMotoguadana, getMotoguadanas, updateMotoguadana } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getMotoguadanas)
router.get('/:id_producto', getMotoguadana)
router.post('/', validarProducto,   createMotoguadana)
router.put('/:id_producto', validarProducto, updateMotoguadana)
router.delete('/:id_producto', deleteMotoguadana)

export default router;
