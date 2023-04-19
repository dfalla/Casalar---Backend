import { Router } from "express";
import { getAceites, getAceite, createAceite, deleteAceite, updateAceite } from '../controllers/aceite';
import { validarJWT } from "../middlewares/validar-jwt";
import { validarAceite } from "../middlewares/validarCamposProductoAceite";

const router = Router();
router.use( validarJWT );

router.get('/', getAceites)
router.get('/:id', getAceite)
router.post('/', validarAceite,   createAceite)
router.put('/:id', validarAceite, updateAceite)
router.delete('/:id', deleteAceite)

export default router;
