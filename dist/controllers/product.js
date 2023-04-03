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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.getProducts = void 0;
const product_1 = require("../models/product");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.Product.findAll();
    res.json({ products });
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findByPk(id);
    if (product) {
        res.json({ product });
    }
    else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        });
    }
});
exports.getProduct = getProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { nombre, descripcion } = body;
    try {
        const existeProduct = yield product_1.Product.findOne({
            where: {
                nombre: nombre
            }
        });
        if (existeProduct) {
            return res.status(400).json({
                msg: 'Ya existe un producto con esa categoria ' + nombre
            });
        }
        try {
            yield product_1.Product.create({
                nombre,
                descripcion
            });
            res.json({
                msg: `Producto ${nombre} creado exitosamente!`
            });
        }
        catch (error) {
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const product = yield product_1.Product.findByPk(id);
        if (!product) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }
        yield product.update(body);
        res.json({
            msg: "producto eliminado correctamente",
            product
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const product = yield product_1.Product.findByPk(id);
    if (!product) {
        return res.status(404).json({
            msg: 'No existe un priducto con el id ' + id
        });
    }
    yield product.destroy();
    res.json({
        msg: "producto eliminado correctamente",
        product
    });
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.js.map