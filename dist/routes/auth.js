"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.post('/register', validar_campos_1.validarCamposRegistro, auth_1.registerUser);
router.post('/login', validar_campos_1.validarCamposLogin, auth_1.loginUser);
router.get('/renew', validar_jwt_1.validarJWT, auth_1.revalidarToken);
exports.default = router;
//# sourceMappingURL=auth.js.map