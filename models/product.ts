import { DataTypes } from 'sequelize';
import db from '../database/connection';


export const Product = db.define('productos', {
    nombre: {
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