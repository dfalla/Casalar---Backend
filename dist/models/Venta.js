"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const constants_1 = require("../constants");
exports.Venta = connection_1.default.define('ventas', constants_1.venta, {
    freezeTableName: true
});
//# sourceMappingURL=Venta.js.map