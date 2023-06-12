import { Router } from "express";
import { createAccesorioElectrico, deleteAccesorioElectrico, getAccesorioElectrico, getAccesoriosElectricos, updateAccesorioElectrico } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getAccesoriosElectricos)
router.get('/:id_producto', getAccesorioElectrico)
router.post('/', validarProducto,   createAccesorioElectrico)
router.put('/:id_producto', validarProducto, updateAccesorioElectrico)
router.delete('/:id_producto', deleteAccesorioElectrico)

export default router;
