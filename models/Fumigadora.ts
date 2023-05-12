import { product } from '../constants';
import db from '../database/connection';

export const Fumigadora = db.define('mochilas_fumigadoras', product, {
    freezeTableName: true
})