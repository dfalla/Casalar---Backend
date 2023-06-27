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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNombreDeProducto = exports.updateNombreDeProducto = exports.createNombreDeProducto = exports.getNombreDeProducto = exports.getNombresDeProductos = void 0;
const models_1 = require("../models");
const getNombresDeProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield models_1.NombreProducto.findAll();
        return res.json({
            productos: productos.reverse()
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor hola'
        });
    }
});
exports.getNombresDeProductos = getNombresDeProductos;
const getNombreDeProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const producto = yield models_1.NombreProducto.findByPk(id);
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
exports.getNombreDeProducto = getNombreDeProducto;
const createNombreDeProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, value } = req.body;
        try {
            const existeProducto = yield models_1.NombreProducto.findOne({
                where: {
                    nombre: nombre
                }
            });
            if (existeProducto) {
                return res.status(400).json({
                    msg: `Ya existe el producto ${nombre}`
                });
            }
            yield models_1.NombreProducto.create({
                nombre: nombre.split('')[0].toUpperCase() + nombre.slice(1),
                value,
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
exports.createNombreDeProducto = createNombreDeProducto;
const updateNombreDeProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre } = req.body;
        const producto = yield models_1.NombreProducto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }
        yield models_1.NombreProducto.update({
            nombre: nombre.split('')[0].toUpperCase() + nombre.slice(1),
        }, {
            where: {
                id: id,
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
exports.updateNombreDeProducto = updateNombreDeProducto;
const deleteNombreDeProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const producto = yield models_1.NombreProducto.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }
        yield producto.destroy();
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
exports.deleteNombreDeProducto = deleteNombreDeProducto;
//# sourceMappingURL=nombreDeProducto.js.map