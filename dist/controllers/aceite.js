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
exports.deleteAceite = exports.updateAceite = exports.createAceite = exports.getAceite = exports.getAceites = void 0;
const Aceite_1 = require("../models/Aceite");
const cloudinary_1 = require("../libs/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const getAceites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const aceites = yield Aceite_1.Aceite.findAll();
        return res.json({
            aceites: aceites.reverse()
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor hola'
        });
    }
});
exports.getAceites = getAceites;
const getAceite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const aceite = yield Aceite_1.Aceite.findByPk(id);
        if (!aceite) {
            return res.status(404).json({
                error: "No existe el aceite"
            });
        }
        return res.json({
            aceite
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
});
exports.getAceite = getAceite;
const createAceite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { marca, precio, stock, descripcion } = req.body;
        console.log("req.body desde createAceite", req.body);
        let image;
        let image_public_id;
        try {
            const existeAceite = yield Aceite_1.Aceite.findOne({
                where: {
                    marca: marca
                }
            });
            if (existeAceite) {
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
            yield Aceite_1.Aceite.create({
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
exports.createAceite = createAceite;
const updateAceite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { marca, precio, stock, descripcion } = req.body;
        let image;
        let image_public_id;
        const aceite = yield Aceite_1.Aceite.findByPk(id);
        if (!aceite) {
            return res.status(404).json({
                msg: 'No existe un aceite con el id ' + id
            });
        }
        yield (0, cloudinary_1.deleteImage)(aceite.dataValues.imagen_public_id);
        if (req.files.imagen) {
            const result = yield (0, cloudinary_1.uploadImage)(req.files.imagen.tempFilePath);
            yield fs_extra_1.default.remove(req.files.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }
        yield Aceite_1.Aceite.update({
            marca: marca.split('')[0].toUpperCase() + marca.slice(1),
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
            msg: "Producto actualizado correctamente",
            aceite
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updateAceite = updateAceite;
const deleteAceite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const aceite = yield Aceite_1.Aceite.findByPk(id);
        if (!aceite) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }
        yield aceite.destroy();
        yield (0, cloudinary_1.deleteImage)(aceite.dataValues.imagen_public_id);
        res.json({
            msg: "Producto eliminado correctamente",
            aceite
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error de servidor' });
    }
});
exports.deleteAceite = deleteAceite;
//# sourceMappingURL=aceite.js.map