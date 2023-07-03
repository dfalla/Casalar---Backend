import { DataTypes } from 'sequelize';

export const product = {
    id_producto: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    precio: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    stock: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: true, 

    },
    imagen_public_id: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.STRING,
        allowNull: false
    },
    times_created: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
}

export const venta = {
    id_venta: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    id_producto:{
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
    subtotal: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
}
