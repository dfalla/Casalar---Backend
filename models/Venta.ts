// import { DataTypes } from 'sequelize';
import sequelize from '../database/connection';
// import { venta } from '../constants';

// export const Venta = sequelize.define('ventas', venta, {
//     freezeTableName: true
// })

import { Model, DataTypes, Sequelize, InitOptions } from 'sequelize';

class Venta extends Model {
    public id_venta!    : number;
    public id_producto! : string;
    public producto!    : string;
    public cantidad!    : string;
    public marca!       : number;
    public subtotal!    : number;
}

const ventaInitOptions: InitOptions<Venta> = {
    sequelize,
    modelName: 'Venta', // nombre del modelo
    tableName: 'ventas', // nombre de la tabla en la base de datos
};

Venta.init(
    {
        id_venta: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        id_producto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        producto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        subTotal: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        fecha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hora: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    ventaInitOptions
  );
  
  export { Venta }