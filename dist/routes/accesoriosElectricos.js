"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', controllers_1.getAccesoriosElectricos);
router.get('/:id_producto', controllers_1.getAccesorioElectrico);
router.post('/', validarCamposProducto_1.validarProducto, controllers_1.createAccesorioElectrico);
router.put('/:id_producto', validarCamposProducto_1.validarProducto, controllers_1.updateAccesorioElectrico);
router.delete('/:id_producto', controllers_1.deleteAccesorioElectrico);
exports.default = router;
//# sourceMappingURL=accesoriosElectricos.js.map