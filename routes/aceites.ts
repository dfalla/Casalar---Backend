import { Router } from "express";
import { getAceites, getAceite, createAceite, deleteAceite, updateAceite } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getAceites)
router.get('/:id_producto', getAceite)
router.post('/', validarProducto,   createAceite)
router.put('/:id_producto', validarProducto, updateAceite)
router.delete('/:id_producto', deleteAceite)

export default router;
