"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aceite_1 = require("../controllers/aceite");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', aceite_1.getAceites);
router.get('/:id', aceite_1.getAceite);
router.post('/', validarCamposProducto_1.validarProducto, aceite_1.createAceite);
router.put('/:id', validarCamposProducto_1.validarProducto, aceite_1.updateAceite);
router.delete('/:id', aceite_1.deleteAceite);
exports.default = router;
//# sourceMappingURL=aceites.js.map