"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../database/connection"));
exports.Image = connection_1.default.define('imagenes', {
    url: {
        type: sequelize_1.DataTypes.STRING
    },
    public_id_imagen: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    freezeTableName: true
});
//# sourceMappingURL=image.js.map