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
exports.deleteMotor = exports.updateMotor = exports.createMotor = exports.getMotor = exports.getMotores = void 0;
const Motor_1 = require("../models/Motor");
const cloudinary_1 = require("../libs/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const getMotores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const motores = yield Motor_1.Motor.findAll();
        return res.json({
            motores: motores.reverse()
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor hola'
        });
    }
});
exports.getMotores = getMotores;
const getMotor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const motor = yield Motor_1.Motor.findByPk(id);
        if (!motor) {
            return res.status(404).json({
                error: "No existe el motor"
            });
        }
        return res.json({
            motor
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
});
exports.getMotor = getMotor;
const createMotor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { marca, precio, stock, descripcion } = req.body;
        console.log("req.body desde createAceite", req.body);
        let image;
        let image_public_id;
        try {
            const existeMotor = yield Motor_1.Motor.findOne({
                where: {
                    marca: marca
                }
            });
            if (existeMotor) {
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
            yield Motor_1.Motor.create({
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
exports.createMotor = createMotor;
const updateMotor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { marca, precio, stock, descripcion } = req.body;
        let image;
        let image_public_id;
        const motor = yield Motor_1.Motor.findByPk(id);
        if (!motor) {
            return res.status(404).json({
                msg: 'No existe un motor con el id ' + id
            });
        }
        yield (0, cloudinary_1.deleteImage)(motor.dataValues.imagen_public_id);
        if (req.files.imagen) {
            const result = yield (0, cloudinary_1.uploadImage)(req.files.imagen.tempFilePath);
            yield fs_extra_1.default.remove(req.files.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }
        yield Motor_1.Motor.update({
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
            motor
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.updateMotor = updateMotor;
const deleteMotor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const motor = yield Motor_1.Motor.findByPk(id);
        if (!motor) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }
        yield motor.destroy();
        yield (0, cloudinary_1.deleteImage)(motor.dataValues.imagen_public_id);
        res.json({
            msg: "Producto eliminado correctamente",
            motor
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Error de servidor' });
    }
});
exports.deleteMotor = deleteMotor;
//# sourceMappingURL=motor.js.map