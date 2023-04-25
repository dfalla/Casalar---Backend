import { DataTypes } from 'sequelize';

export const product = {
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
        allowNull: false
    },
    imagen_public_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}