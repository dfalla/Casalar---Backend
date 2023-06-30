import { DataTypes } from 'sequelize';
import db from '../database/connection';
import { venta } from '../constants';

export const Venta = db.define('ventas', venta, {
    freezeTableName: true
})