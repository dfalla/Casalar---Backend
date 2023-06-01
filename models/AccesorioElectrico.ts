import { product } from '../constants';
import db from '../database/connection';

export const AccesorioElectrico = db.define('accesorios_electricos', product, {
    freezeTableName: true
})