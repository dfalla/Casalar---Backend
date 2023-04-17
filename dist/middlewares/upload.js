"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFiles = void 0;
const path_1 = __importDefault(require("path")); // permite trabajar con rutas
const url_1 = require("url");
const multer_1 = __importDefault(require("multer"));
const __filename = (0, url_1.fileURLToPath)(import.meta.url);
const __dirname = path_1.default.dirname(__filename);
//Creamos el disco de almacenamiento
const diskStorage = multer_1.default.diskStorage({
    //Donde se va a guardar
    destination: (req, file, cb) => {
        const filePath = path_1.default.resolve(__dirname, "../public/uploads");
        cb(null, filePath);
    },
    //como se va a guardar
    filename: (req, file, cb) => {
        const fileName = req.body.nombre.replaceAll(" ", "-").toLowerCase();
        const fileExtension = path_1.default.extname(file.originalname);
        cb(null, `${fileName}-${Date.now()}${fileExtension}`);
    }
});
//Configuración para subir archivos
exports.uploadFiles = (0, multer_1.default)({
    storage: diskStorage,
    fileFilter: (req, file, cb) => {
        const acceptedExtensions = ["jpg", "png", "jpeg", "gif"];
        const fileExtension = path_1.default.extname(file.originalname);
        const isAnAcceptedExtension = acceptedExtensions.includes(fileExtension);
        if (isAnAcceptedExtension) {
            cb(null, true);
        }
        else {
            cb(null, false);
        }
    }
}).single("imagen");
//# sourceMappingURL=upload.js.map