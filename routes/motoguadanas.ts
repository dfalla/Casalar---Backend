import { Router } from "express";
import { createMotoguadana, deleteMotoguadana, getMotoguadana, getMotoguadanas, updateMotoguadana } from '../controllers/motoguadana';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getMotoguadanas)
router.get('/:id', getMotoguadana)
router.post('/', validarProducto,   createMotoguadana)
router.put('/:id', validarProducto, updateMotoguadana)
router.delete('/:id', deleteMotoguadana)

export default router;
