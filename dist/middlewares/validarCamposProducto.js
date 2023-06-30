"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarVenta = exports.validarNombreDeProducto = exports.validarProducto = void 0;
const validationResult_1 = require("./validationResult");
exports.validarProducto = [
    (0, validationResult_1.check)("marca", "Ingrese un nombre de marca válido")
        .isString()
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("precio", "Ingrese un precio ")
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("stock", "Ingrese un stock ")
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("descripcion", "Ingrese una descripcion ")
        .trim()
        .notEmpty()
        .isLength({ min: 1, max: 255 }),
    validationResult_1.validarCampos,
];
exports.validarNombreDeProducto = [
    (0, validationResult_1.check)("nombre", "Ingrese un nombre de marca válido")
        .isString()
        .trim()
        .notEmpty(),
    validationResult_1.validarCampos,
];
exports.validarVenta = [
    (0, validationResult_1.check)("cantidad", "Ingrese una cantidad")
        .isNumeric()
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("subtotal", "Ingrese una cantidad")
        .isDecimal()
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("marca", "Ingrese una cantidad")
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("producto", "Ingrese una cantidad")
        .trim()
        .notEmpty(),
    validationResult_1.validarCampos
];
//# sourceMappingURL=validarCamposProducto.js.map