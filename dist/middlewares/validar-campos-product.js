"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarAceite = void 0;
const validationResult_1 = require("./validationResult");
exports.validarAceite = [
    (0, validationResult_1.check)("nombre", "Ingrese un nombre válido")
        .isString()
        .trim()
        .notEmpty(),
    (0, validationResult_1.check)("descripcion", "Ingrese una descripción válida")
        .trim()
        .notEmpty()
        .isLength({ min: 6, max: 255 }),
    (0, validationResult_1.check)("marca", "Ingrese una descripción válida")
        .trim()
        .notEmpty()
        .isLength({ min: 6, max: 15 }),
    // check("precio", "Ingrese una descripción válida")
    //     .trim()
    //     .notEmpty()
    //     .isLength({min: 6, max: 255}),
    validationResult_1.validarCampos,
];
//# sourceMappingURL=validar-campos-product.js.map