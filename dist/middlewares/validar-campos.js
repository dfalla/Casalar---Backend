"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarCamposLogin = exports.validarCamposRegistro = void 0;
const validationResult_1 = require("./validationResult");
exports.validarCamposRegistro = [
    (0, validationResult_1.check)('nombre', 'El nombre es obligatorio').not().isEmpty(),
    (0, validationResult_1.check)('apellido', 'El apellido es obligatorio').not().isEmpty(),
    (0, validationResult_1.check)('username', 'El username es obligatorio').not().isEmpty(),
    (0, validationResult_1.check)('password', 'El password es obligatorio').not().isEmpty(),
    (0, validationResult_1.check)('password', 'El password debe de ser de 6 caracteres como mínimo').isLength({ min: 6 }),
    // check('password', 'El password debe de ser de 15 caracteres como máximo').isLength({max: 15}),
    validationResult_1.validarCampos
];
exports.validarCamposLogin = [
    (0, validationResult_1.check)('username', 'El username es obligatorio').not().isEmpty(),
    (0, validationResult_1.check)('password', 'El password debe ser de 6 caracteres como mínimo').isLength({ min: 6 }),
    validationResult_1.validarCampos
];
//# sourceMappingURL=validar-campos.js.map