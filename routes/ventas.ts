import { Router } from "express";
import { createVenta, getAllVentas } from '../controllers';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarVenta } from "../middlewares/validarCamposProducto";

const router = Router();
router.use( validarJWT );

router.get('/', getAllVentas)
// router.get('/:id', getNombreDeProducto)
router.post('/', createVenta)
// router.put('/:id', validarNombreDeProducto, updateNombreDeProducto)
// router.delete('/:id', deleteNombreDeProducto)

export default router;