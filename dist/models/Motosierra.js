"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motosierra = void 0;
const constants_1 = require("../constants");
const connection_1 = __importDefault(require("../database/connection"));
exports.Motosierra = connection_1.default.define('motosierras', constants_1.product, {
    freezeTableName: true
});
//# sourceMappingURL=Motosierra.js.map