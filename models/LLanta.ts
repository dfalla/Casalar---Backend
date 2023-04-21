import { DataTypes } from 'sequelize';
import db from '../database/connection';


export const LLanta = db.define('llantas', {
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cantidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    stock: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen_public_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
})