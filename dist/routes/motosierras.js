"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const motosierra_1 = require("../controllers/motosierra");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validarCamposProducto_1 = require("../middlewares/validarCamposProducto");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', motosierra_1.getMotosierras);
router.get('/:id', motosierra_1.getMotosierra);
router.post('/', validarCamposProducto_1.validarProducto, motosierra_1.createMotosierra);
router.put('/:id', validarCamposProducto_1.validarProducto, motosierra_1.updateMotosierra);
router.delete('/:id', motosierra_1.deleteMotosierra);
exports.default = router;
//# sourceMappingURL=motosierras.js.map