import { Router } from "express";
import { createAccesorioElectrico, deleteAccesorioElectrico, getAccesorioElectrico, getAccesoriosElectricos, updateAccesorioElectrico } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getAccesoriosElectricos)
router.get('/:id', getAccesorioElectrico)
router.post('/', validarProducto,   createAccesorioElectrico)
router.put('/:id', validarProducto, updateAccesorioElectrico)
router.delete('/:id', deleteAccesorioElectrico)

export default router;
