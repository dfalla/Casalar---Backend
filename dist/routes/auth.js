"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validar_campos_1 = require("../middlewares/validar-campos");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.post('/register', validar_campos_1.validarCamposRegistro, controllers_1.registerUser);
router.post('/login', validar_campos_1.validarCamposLogin, controllers_1.loginUser);
router.get('/renew', validar_jwt_1.validarJWT, controllers_1.revalidarToken);
exports.default = router;
//# sourceMappingURL=auth.js.map