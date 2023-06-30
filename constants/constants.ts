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
    cantidad: {
        type: DataTypes.NUMBER,
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

export const accesorio_electrico_product = {
    id_accesorio_electrico: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ...product
}

export const aceite_product = {
    id_aceite: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ...product
}

export const llanta_product = {
    id_llanta: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ...product
}

export const mochila_fumigadora_product = {
    id_mochila_fumigadora: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ...product
}

export const motoguadana_product = {
    id_motoguadana: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ...product
}

export const motor_product = {
    id_motor: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ...product
}

export const motosierra_product = {
    id_motosierra: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    ...product
}