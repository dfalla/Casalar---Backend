"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLanta = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const constants_1 = require("../constants");
exports.LLanta = connection_1.default.define('llantas', constants_1.product, {
    freezeTableName: true
});
//# sourceMappingURL=LLanta.js.map