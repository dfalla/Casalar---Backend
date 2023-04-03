import { DataTypes } from 'sequelize';
import db from '../database/connection';

export const Product = db.define('productos', {
    nombre: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    }
}, )