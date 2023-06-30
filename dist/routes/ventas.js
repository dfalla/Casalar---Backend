"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
// router.get('/', getNombresDeProductos)
// router.get('/:id', getNombreDeProducto)
router.post('/', controllers_1.createVenta);
// router.put('/:id', validarNombreDeProducto, updateNombreDeProducto)
// router.delete('/:id', deleteNombreDeProducto)
exports.default = router;
//# sourceMappingURL=ventas.js.map