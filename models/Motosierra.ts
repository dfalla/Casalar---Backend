import { product } from '../constants';
import db from '../database/connection';

export const Motosierra = db.define('motosierras', product, {
    freezeTableName: true
})