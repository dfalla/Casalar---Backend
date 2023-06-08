"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', controllers_1.getNombresDeProductos);
router.get('/:id', controllers_1.getNombreDeProducto);
router.post('/', validarCamposProducto_1.validarNombreDeProducto, controllers_1.createNombreDeProducto);
router.put('/:id', validarCamposProducto_1.validarNombreDeProducto, controllers_1.updateNombreDeProducto);
router.delete('/:id', controllers_1.deleteNombreDeProducto);
exports.default = router;
//# sourceMappingURL=nombreDeProductos.js.map