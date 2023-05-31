"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motoguadana = void 0;
const constants_1 = require("../constants");
const connection_1 = __importDefault(require("../database/connection"));
exports.Motoguadana = connection_1.default.define('motoguadanas', constants_1.product, {
    freezeTableName: true
});
//# sourceMappingURL=Motoguadana.js.map