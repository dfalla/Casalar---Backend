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
exports.deleteLlanta = exports.updateLlanta = exports.createLlanta = exports.getLlanta = exports.getLlantas = void 0;
const cloudinary_1 = require("../libs/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const models_1 = require("../models");
const getLlantas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const llantas = yield models_1.LLanta.findAll();
        return res.json({
            llantas
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
});
exports.getLlantas = getLlantas;
const getLlanta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const llanta = yield models_1.LLanta.findByPk(id);
        if (!llanta) {
            return res.status(404).json({
                error: "No existe el producto"
            });
        }
        return res.json({
            llanta
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
});
exports.getLlanta = getLlanta;
const createLlanta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.body desde el controlador", req.body);
    try {
        const { cantidad, marca, precio, stock, descripcion } = req.body;
        let image;
        let image_public_id;
        try {
            const existeLlanta = yield models_1.LLanta.findOne({
                where: {
                    marca: marca
                }
            });
            if (existeLlanta) {
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
            yield models_1.LLanta.create({
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                cantidad,
                precio: parseFloat(precio),
                stock,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id
            });
            res.json({
                msg: `La llanta con la marca ${marca} fue registrado exitosamente!`
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
exports.createLlanta = createLlanta;
const updateLlanta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { cantidad, marca, precio, stock, descripcion } = req.body;
        let image;
        let image_public_id;
        const llanta = yield models_1.LLanta.findByPk(id);
        if (!llanta) {
            return res.status(404).json({
                msg: 'No existe una llanta con el id ' + id
            });
        }
        yield (0, cloudinary_1.deleteImage)(llanta.dataValues.imagen_public_id);
        if (req.files.imagen) {
            const result = yield (0, cloudinary_1.uploadImage)(req.files.imagen.tempFilePath);
            yield fs_extra_1.default.remove(req.files.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }
        yield models_1.LLanta.update({
            marca: marca.split('')[0].toUpperCase() + marca.slice(1),
            cantidad,
            precio: parseFloat(precio),
            stock,
            descripcion,
            imagen: image,
            imagen_public_id: image_public_id,
        }, {
            where: {
                id: id,
            }
        });
        res.json({
            msg: "Llanta actualizado correctamente",
            llanta
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updateLlanta = updateLlanta;
const deleteLlanta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const llanta = yield models_1.LLanta.findByPk(id);
        if (!llanta) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }
        yield llanta.destroy();
        yield (0, cloudinary_1.deleteImage)(llanta.dataValues.imagen_public_id);
        res.json({
            msg: " Producto llanta eliminado correctamente",
            llanta
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error de servidor' });
    }
});
exports.deleteLlanta = deleteLlanta;
//# sourceMappingURL=llanta.js.map