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
exports.createVenta = exports.getAllVentas = void 0;
const models_1 = require("../models");
const getAllVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ventas = yield models_1.Venta.findAll();
        // console.log("productos", productos)
        return res.json({
            ventas
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
});
exports.getAllVentas = getAllVentas;
const createVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ventas } = req.body;
    const arrVentas = JSON.parse(ventas);
    try {
        yield models_1.Venta.bulkCreate(arrVentas);
        res.status(200).json({ message: 'Datos guardados exitosamente' });
    }
    catch (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).json({ error: 'Error al guardar los datos' });
    }
});
exports.createVenta = createVenta;
//# sourceMappingURL=venta.js.map