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
const express_1 = __importDefault(require("express"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const auth_1 = __importDefault(require("../routes/auth"));
const product_1 = __importDefault(require("../routes/product"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../database/connection"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: '/api/auth',
            productos: '/api/productos'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        // Métodos iniciales
        this.listen();
        this.dbConnection();
        this.middlewares();
        this.routes();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                console.log('Base de datos conectada 😍');
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, auth_1.default);
        this.app.use(this.apiPaths.productos, product_1.default);
    }
    middlewares() {
        this.app.use((0, express_fileupload_1.default)({
            useTempFiles: true,
            tempFileDir: './upload',
        }));
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        // Carpeta pública
        this.app.use(express_1.default.static('public'));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map