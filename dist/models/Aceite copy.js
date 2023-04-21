"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aceite = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.Aceite = connection_1.default.define('aceites', {
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imagen_public_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});
//# sourceMappingURL=Aceite%20copy.js.map