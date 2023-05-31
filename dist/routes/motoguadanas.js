"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motoguadana_1 = require("../controllers/motoguadana");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', motoguadana_1.getMotoguadanas);
router.get('/:id', motoguadana_1.getMotoguadana);
router.post('/', validarCamposProducto_1.validarProducto, motoguadana_1.createMotoguadana);
router.put('/:id', validarCamposProducto_1.validarProducto, motoguadana_1.updateMotoguadana);
router.delete('/:id', motoguadana_1.deleteMotoguadana);
exports.default = router;
//# sourceMappingURL=motoguadanas.js.map