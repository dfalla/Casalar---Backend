import { product } from '../constants';
import db from '../database/connection';

export const Motoguadana = db.define('motoguadanas', product, {
    freezeTableName: true
})