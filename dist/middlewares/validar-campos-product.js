"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarProducto = void 0;
const validationResult_1 = require("./validationResult");
exports.validarProducto = [
    (0, validationResult_1.check)("nombre", "Ingrese un nombre válido")
        .isString()
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("descripcion", "Ingrese un apellido válido")
        .trim()
        .notEmpty()
        .isLength({ min: 6, max: 255 }),
    validationResult_1.validarCampos,
];
//# sourceMappingURL=validar-campos-product.js.map