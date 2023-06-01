"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccesorioElectrico = void 0;
const constants_1 = require("../constants");
const connection_1 = __importDefault(require("../database/connection"));
exports.AccesorioElectrico = connection_1.default.define('accesorios_electricos', constants_1.product, {
    freezeTableName: true
});
//# sourceMappingURL=AccesorioElectrico.js.map