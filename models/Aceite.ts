import { product } from '../constants';
import db from '../database/connection';

export const Aceite = db.define('aceites', product, {
    freezeTableName: true
})