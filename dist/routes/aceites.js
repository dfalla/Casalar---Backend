"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', controllers_1.getAceites);
router.get('/:id_producto', controllers_1.getAceite);
router.post('/', validarCamposProducto_1.validarProducto, controllers_1.createAceite);
router.put('/:id_producto', validarCamposProducto_1.validarProducto, controllers_1.updateAceite);
router.delete('/:id_producto', controllers_1.deleteAceite);
exports.default = router;
//# sourceMappingURL=aceites.js.map