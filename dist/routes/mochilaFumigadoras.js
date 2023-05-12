"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mochilaFumigadora_1 = require("../controllers/mochilaFumigadora");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', mochilaFumigadora_1.getMochilas);
router.get('/:id', mochilaFumigadora_1.getMochila);
router.post('/', validarCamposProducto_1.validarProducto, mochilaFumigadora_1.createMochila);
router.put('/:id', validarCamposProducto_1.validarProducto, mochilaFumigadora_1.updateMochila);
router.delete('/:id', mochilaFumigadora_1.deleteMochila);
exports.default = router;
//# sourceMappingURL=mochilaFumigadoras.js.map