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
exports.revalidarToken = exports.loginUser = exports.registerUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_1 = require("../helpers/jwt");
const models_1 = require("../models");
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, apellido, username, password } = req.body;
    console.log({ nombre, apellido, username, password });
    // Validamos si el usuario ya existe en la base de datos
    const user = yield models_1.User.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario ${username}`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        // Guardarmos usuario en la base de datos
        const usuario = yield models_1.User.create({
            nombre,
            apellido,
            username: username,
            password: hashedPassword
        });
        const token = yield (0, jwt_1.generarJWT)({ uid: usuario.dataValues.id, name: usuario.dataValues.nombre });
        res.json({
            msg: `Usuario ${username} creado exitosamente!`,
            nombre: usuario.dataValues.nombre,
            apellido: usuario.dataValues.apellido,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            status: 500,
            msg: 'Por favor hable con el administrador'
        });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    // Validamos si el usuario existe en la base de datos
    try {
        const user = yield models_1.User.findOne({ where: { username: username } });
        if (!user) {
            return res.status(400).json({
                msg: `No existe un usuario con el nombre ${username} en la base datos`
            });
        }
        // Validamos password
        const passwordValid = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordValid) {
            return res.status(400).json({
                msg: `Password Incorrecta`
            });
        }
        // Generamos token
        const token = yield (0, jwt_1.generarJWT)({ uid: user.id, name: user.nombre });
        res.json({
            ok: true,
            msg: 'Usuario Logueado',
            uid: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }
});
exports.loginUser = loginUser;
const revalidarToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { uid, name } = req.body;
    //generar un nuevo JWT y retornarlo en esta peticion
    const token = yield (0, jwt_1.generarJWT)({ uid, name });
    res.json({
        ok: true,
        name,
        uid,
        token
    });
});
exports.revalidarToken = revalidarToken;
//# sourceMappingURL=auth.js.map