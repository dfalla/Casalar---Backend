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
exports.deleteMochila = exports.updateMochila = exports.createMochila = exports.getMochila = exports.getMochilas = void 0;
const cloudinary_1 = require("../libs/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const models_1 = require("../models");
const getMochilas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield models_1.Fumigadora.findAll();
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
exports.getMochilas = getMochilas;
const getMochila = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto } = req.params;
        const producto = yield models_1.Fumigadora.findByPk(id_producto);
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
exports.getMochila = getMochila;
const createMochila = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto, marca, precio, stock, descripcion } = req.body;
        console.log("req.body desde createAceite", req.body);
        let image;
        let image_public_id;
        try {
            const existeProducto = yield models_1.Fumigadora.findOne({
                where: {
                    marca: marca
                }
            });
            if (existeProducto) {
                return res.status(400).json({
                    msg: `Ya existe un producto con esa marca ${marca}`
                });
            }
            if (req.files.imagen) {
                const result = yield (0, cloudinary_1.uploadImage)(req.files.imagen.tempFilePath);
                yield fs_extra_1.default.remove(req.files.imagen.tempFilePath);
                image = result.secure_url;
                image_public_id = result.public_id;
            }
            yield models_1.Fumigadora.create({
                id_producto,
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                precio: parseFloat(precio),
                stock,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id
            });
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
exports.createMochila = createMochila;
const updateMochila = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto } = req.params;
        const { marca, precio, stock, descripcion } = req.body;
        let image;
        let image_public_id;
        const producto = yield models_1.Fumigadora.findByPk(id_producto);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id_producto
            });
        }
        yield (0, cloudinary_1.deleteImage)(producto.dataValues.imagen_public_id);
        if (req.files.imagen) {
            const result = yield (0, cloudinary_1.uploadImage)(req.files.imagen.tempFilePath);
            yield fs_extra_1.default.remove(req.files.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }
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
exports.updateMochila = updateMochila;
const deleteMochila = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto } = req.params;
        const producto = yield models_1.Fumigadora.findByPk(id_producto);
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
exports.deleteMochila = deleteMochila;
//# sourceMappingURL=mochilaFumigadora.js.map