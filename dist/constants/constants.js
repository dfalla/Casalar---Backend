"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.venta = exports.product = void 0;
const sequelize_1 = require("sequelize");
exports.product = {
    id_producto: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    marca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    imagen_public_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    times_created: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
};
exports.venta = {
    id_venta: {
        type: sequelize_1.DataTypes.STRING,
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
    subtotal: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    },
};
//# sourceMappingURL=constants.js.map