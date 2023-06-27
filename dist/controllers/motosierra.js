"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMotosierra = exports.updateMotosierra = exports.createMotosierra = exports.getMotosierra = exports.getMotosierras = void 0;
const models_1 = require("../models");
const cloudinary_1 = require("../libs/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const helpers_1 = require("../helpers");
const getMotosierras = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield models_1.Motosierra.findAll();
        return res.json({
            productos
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor hola'
        });
    }
});
exports.getMotosierras = getMotosierras;
const getMotosierra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto } = req.params;
        const producto = yield models_1.Motosierra.findByPk(id_producto);
        if (!producto) {
            return res.status(404).json({
                error: "No existe el producto"
            });
        }
        return res.json({
            producto
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
});
exports.getMotosierra = getMotosierra;
const createMotosierra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, marca, precio, stock, descripcion } = req.body;
        const { fecha, times_created } = (0, helpers_1.getFecha)();
        let image;
        let image_public_id;
        try {
            const existeProducto = yield models_1.Motosierra.findOne({
                where: {
                    marca: marca
                }
            });
            if (existeProducto) {
                return res.status(400).json({
                    msg: `Ya existe un producto con esa marca ${marca}`
                });
            }
            if (req.files === null) {
                yield models_1.Motosierra.create({
                    id_producto,
                    marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                    precio: parseFloat(precio),
                    stock,
                    descripcion,
                    created_at: fecha,
                    times_created,
                });
            }
            else {
                const result = yield (0, cloudinary_1.uploadImage)(req.files.imagen.tempFilePath);
                yield fs_extra_1.default.remove(req.files.imagen.tempFilePath);
                image = result.secure_url;
                image_public_id = result.public_id;
                yield models_1.Motosierra.create({
                    id_producto,
                    marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                    precio: parseFloat(precio),
                    stock,
                    descripcion,
                    imagen: image,
                    imagen_public_id: image_public_id,
                    created_at: fecha,
                    times_created,
                });
            }
            res.json({
                msg: `Producto registrado exitosamente!`
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.createMotosierra = createMotosierra;
const updateMotosierra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto } = req.params;
        const { marca, precio, stock, descripcion } = req.body;
        let image;
        let image_public_id;
        const producto = yield models_1.Motosierra.findByPk(id_producto);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id_producto
            });
        }
        if (req.files === null) {
            yield producto.update({
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                precio: parseFloat(precio),
                stock,
                descripcion,
            }, {
                where: {
                    id: id_producto,
                }
            });
        }
        else {
            if (producto.dataValues.imagen_public_id) {
                yield (0, cloudinary_1.deleteImage)(producto.dataValues.imagen_public_id);
            }
            const result = yield (0, cloudinary_1.uploadImage)(req.files.imagen.tempFilePath);
            yield fs_extra_1.default.remove(req.files.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
            yield producto.update({
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                precio: parseFloat(precio),
                stock,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id,
            }, {
                where: {
                    id: id_producto,
                }
            });
        }
        res.json({
            msg: "Producto actualizado correctamente",
            producto
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updateMotosierra = updateMotosierra;
const deleteMotosierra = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto } = req.params;
        const producto = yield models_1.Motosierra.findByPk(id_producto);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id_producto
            });
        }
        yield producto.destroy();
        yield (0, cloudinary_1.deleteImage)(producto.dataValues.imagen_public_id);
        res.json({
            msg: "Producto eliminado correctamente",
            producto
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error de servidor' });
    }
});
exports.deleteMotosierra = deleteMotosierra;
//# sourceMappingURL=motosierra.js.map