"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', controllers_1.getMotores);
router.get('/:id_producto', controllers_1.getMotor);
router.post('/', validarCamposProducto_1.validarProducto, controllers_1.createMotor);
router.put('/:id_producto', validarCamposProducto_1.validarProducto, controllers_1.updateMotor);
router.delete('/:id_producto', controllers_1.deleteMotor);
exports.default = router;
//# sourceMappingURL=motores.js.map