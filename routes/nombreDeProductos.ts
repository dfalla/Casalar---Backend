import { Router } from "express";
import { createNombreDeProducto, deleteNombreDeProducto, getNombreDeProducto, getNombresDeProductos, updateNombreDeProducto } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarNombreDeProducto } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getNombresDeProductos)
router.get('/:id', getNombreDeProducto)
router.post('/', validarNombreDeProducto,   createNombreDeProducto)
router.put('/:id', validarNombreDeProducto, updateNombreDeProducto)
router.delete('/:id', deleteNombreDeProducto)

export default router;
