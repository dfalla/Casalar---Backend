import { Router } from "express";
import { createMotor, deleteMotor, getMotor, getMotores, updateMotor } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getMotores)
router.get('/:id', getMotor)
router.post('/', validarProducto,   createMotor)
router.put('/:id', validarProducto, updateMotor)
router.delete('/:id', deleteMotor)

export default router;
