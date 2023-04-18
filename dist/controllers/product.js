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
const cloudinary_1 = require("../libs/cloudinary");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield product_1.Product.findAll();
        return res.json({
            productos
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
});
exports.getProducts = getProducts;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const producto = yield product_1.Product.findByPk(id);
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
exports.getProduct = getProduct;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, descripcion } = req.body;
        let image;
        let image_public_id;
        if (req.files.imagen) {
            console.log(typeof req.files.imagen);
            //    const result = await uploadImage(req.files!.imagen.tempFilePath);
            //    await fs.remove(req.files!.imagen.tempFilePath);
            //     image = result.secure_url;
            //     image_public_id = result.public_id;
        }
        try {
            const existeProducto = yield product_1.Product.findOne({
                where: {
                    nombre: nombre
                }
            });
            if (existeProducto) {
                return res.status(400).json({
                    msg: 'Ya existe un producto con esa categoria ' + nombre
                });
            }
            yield product_1.Product.create({
                nombre,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id
            });
            res.json({
                msg: `Producto ${nombre} creado exitosamente!`
            });
        }
        catch (error) {
            console.log(error);
        }
    }
    catch (error) {
        // if(error.code === 11000) return res.status(400).json({
        //     error : "Ya existe un alumno registrado con ese número de DNI"
        // });
        // return res.status(500).json({
        //     error: 'Error de servidor'
        // });
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        let image;
        let image_public_id;
        const producto = yield product_1.Product.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }
        yield (0, cloudinary_1.deleteImage)(producto.dataValues.imagen_public_id);
        if (req.files.imagen) {
            // const result = await uploadImage(req.files!.imagen.tempFilePath);
            // await fs.remove(req.files!.imagen.tempFilePath);
            // image = result.secure_url;
            // image_public_id = result.public_id;
        }
        yield product_1.Product.update({
            nombre,
            descripcion,
            imagen: image,
            imagen_public_id: image_public_id,
        }, {
            where: {
                id: id,
            }
        });
        res.json({
            msg: "producto actualizado correctamente",
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
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const producto = yield product_1.Product.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }
        console.log("producto", producto);
        yield product_1.Product.destroy();
        yield (0, cloudinary_1.deleteImage)(producto.dataValues.imagen_public_id);
        res.json({
            msg: "producto eliminado correctamente",
            producto
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error de servidor' });
    }
});
exports.deleteProduct = deleteProduct;
//# sourceMappingURL=product.js.map