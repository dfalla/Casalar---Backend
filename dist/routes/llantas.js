"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const llanta_1 = require("../controllers/llanta");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', llanta_1.getLlantas);
router.get('/:id', llanta_1.getLlanta);
router.post('/', validarCamposProducto_1.validarProducto, llanta_1.createLlanta);
router.put('/:id', validarCamposProducto_1.validarProducto, llanta_1.updateLlanta);
router.delete('/:id', llanta_1.deleteLlanta);
exports.default = router;
//# sourceMappingURL=llantas.js.map