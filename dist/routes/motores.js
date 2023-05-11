"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motor_1 = require("../controllers/motor");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', motor_1.getMotores);
router.get('/:id', motor_1.getMotor);
router.post('/', validarCamposProducto_1.validarProducto, motor_1.createMotor);
router.put('/:id', validarCamposProducto_1.validarProducto, motor_1.updateMotor);
router.delete('/:id', motor_1.deleteMotor);
exports.default = router;
//# sourceMappingURL=motores.js.map