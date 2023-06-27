"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.motosierra_product = exports.motor_product = exports.motoguadana_product = exports.mochila_fumigadora_product = exports.llanta_product = exports.aceite_product = exports.accesorio_electrico_product = exports.product = void 0;
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
exports.accesorio_electrico_product = Object.assign({ id_accesorio_electrico: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    } }, exports.product);
exports.aceite_product = Object.assign({ id_aceite: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    } }, exports.product);
exports.llanta_product = Object.assign({ id_llanta: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    } }, exports.product);
exports.mochila_fumigadora_product = Object.assign({ id_mochila_fumigadora: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    } }, exports.product);
exports.motoguadana_product = Object.assign({ id_motoguadana: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    } }, exports.product);
exports.motor_product = Object.assign({ id_motor: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    } }, exports.product);
exports.motosierra_product = Object.assign({ id_motosierra: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    } }, exports.product);
//# sourceMappingURL=constants.js.map