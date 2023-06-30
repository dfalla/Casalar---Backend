import { Router } from "express";
import { createVenta } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarVenta } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

// router.get('/', getNombresDeProductos)
// router.get('/:id', getNombreDeProducto)
router.post('/', createVenta)
// router.put('/:id', validarNombreDeProducto, updateNombreDeProducto)
// router.delete('/:id', deleteNombreDeProducto)

export default router;