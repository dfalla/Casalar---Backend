"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
// import { DataTypes } from 'sequelize';
const connection_1 = __importDefault(require("../database/connection"));
// import { venta } from '../constants';
// export const Venta = sequelize.define('ventas', venta, {
//     freezeTableName: true
// })
const sequelize_1 = require("sequelize");
class Venta extends sequelize_1.Model {
}
exports.Venta = Venta;
const ventaInitOptions = {
    sequelize: connection_1.default,
    modelName: 'Venta',
    tableName: 'ventas', // nombre de la tabla en la base de datos
};
Venta.init({
    id_venta: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
    },
    id_producto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    producto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    subTotal: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    hora: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, ventaInitOptions);
//# sourceMappingURL=Venta.js.map