import { product } from '../constants';
import db from '../database/connection';

export const Motor = db.define('motores', product, {
    freezeTableName: true
})