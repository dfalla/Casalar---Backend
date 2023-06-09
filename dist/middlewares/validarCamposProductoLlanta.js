"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarLlanta = void 0;
const validationResult_1 = require("./validationResult");
exports.validarLlanta = [
    (0, validationResult_1.check)("marca", "Ingrese un nombre de marca válido")
        .isString()
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("cantidad", "Ingrese la cantidad de aceites de esta marca que tiene en su tienda")
        .trim()
        .notEmpty()
        .isLength({ min: 1, max: 255 }),
    (0, validationResult_1.check)("precio", "Ingrese un precio ")
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("stock", "Ingrese un si o no ")
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("descripcion", "Ingrese una descripcion ")
        .trim()
        .notEmpty()
        .isLength({ min: 1, max: 255 }),
    validationResult_1.validarCampos,
];
//# sourceMappingURL=validarCamposProductoLlanta.js.map