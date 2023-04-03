"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_1 = require("../controllers/product");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const validar_campos_product_1 = require("../middlewares/validar-campos-product");
const router = (0, express_1.Router)();
router.use(validar_jwt_1.validarJWT);
router.get('/', product_1.getProducts);
router.get('/:id', product_1.getProduct);
router.post('/', validar_campos_product_1.validarProducto, product_1.createProduct);
router.put('/:id', validar_campos_product_1.validarProducto, product_1.updateProduct);
router.delete('/:id', product_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=product.js.map