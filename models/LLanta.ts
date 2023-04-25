import db from '../database/connection';
import { product } from '../constants';

export const LLanta = db.define('llantas', product, {
    freezeTableName: true
})