"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NombreProducto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.NombreProducto = connection_1.default.define('productos', {
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true
});
//# sourceMappingURL=NombreDeProducto.js.map