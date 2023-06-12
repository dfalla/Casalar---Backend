"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', controllers_1.getMotosierras);
router.get('/:id_producto', controllers_1.getMotosierra);
router.post('/', validarCamposProducto_1.validarProducto, controllers_1.createMotosierra);
router.put('/:id_producto', validarCamposProducto_1.validarProducto, controllers_1.updateMotosierra);
router.delete('/:id_producto', controllers_1.deleteMotosierra);
exports.default = router;
//# sourceMappingURL=motosierras.js.map