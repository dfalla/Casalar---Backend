"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.validarCampos = void 0;
const express_validator_1 = require("express-validator");
Object.defineProperty(exports, "check", { enumerable: true, get: function () { return express_validator_1.check; } });
const validarCampos = (req, res, next) => {
    console.log("req.body", req.body);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.mapped()
        });
    }
    next();
};
exports.validarCampos = validarCampos;
//# sourceMappingURL=validationResult.js.map