"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
const sequelize_1 = require("sequelize");
exports.product = {
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
        allowNull: false
    },
    imagen_public_id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
};
//# sourceMappingURL=constants.js.map