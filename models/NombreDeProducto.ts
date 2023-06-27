import { DataTypes } from 'sequelize';
import db from '../database/connection';


export const NombreProducto = db.define('productos', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true
})