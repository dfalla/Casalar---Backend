import { Router } from 'express';
import { loginUser, registerUser, revalidarToken } from '../controllers/auth';
import { validarCamposRegistro, validarCamposLogin } from '../middlewares/validar-campos';
import { validarJWT } from '../middlewares/validar-jwt'


const router = Router();

router.post('/register', validarCamposRegistro, registerUser );
router.post('/login', validarCamposLogin, loginUser );
router.get('/renew', validarJWT ,revalidarToken);

export default router;