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
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("../database/connection"));
const auth_1 = __importDefault(require("../routes/auth"));
const aceites_1 = __importDefault(require("../routes/aceites"));
const llantas_1 = __importDefault(require("../routes/llantas"));
const motores_1 = __importDefault(require("../routes/motores"));
const mochilaFumigadoras_1 = __importDefault(require("../routes/mochilaFumigadoras"));
const motosierras_1 = __importDefault(require("../routes/motosierras"));
const motoguadanas_1 = __importDefault(require("../routes/motoguadanas"));
const accesoriosElectricos_1 = __importDefault(require("../routes/accesoriosElectricos"));
const nombreDeProductos_1 = __importDefault(require("../routes/nombreDeProductos"));
const ventas_1 = __importDefault(require("../routes/ventas"));
class Server {
    constructor() {
        this.apiPaths = {
            auth: '/api/auth',
            aceites: '/api/aceites',
            llantas: '/api/llantas',
            motores: '/api/motores',
            fumigadoras: '/api/fumigadoras',
            motosierras: '/api/motosierras',
            motoguadanas: '/api/motoguadanas',
            accesoriosElectricos: '/api/accesorios-electricos',
            nombresDeProductos: '/api/productos',
            ventas: '/api/ventas'
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
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.aceites, aceites_1.default);
        this.app.use(this.apiPaths.llantas, llantas_1.default);
        this.app.use(this.apiPaths.motores, motores_1.default);
        this.app.use(this.apiPaths.fumigadoras, mochilaFumigadoras_1.default);
        this.app.use(this.apiPaths.motosierras, motosierras_1.default);
        this.app.use(this.apiPaths.motoguadanas, motoguadanas_1.default);
        this.app.use(this.apiPaths.accesoriosElectricos, accesoriosElectricos_1.default);
        this.app.use(this.apiPaths.nombresDeProductos, nombreDeProductos_1.default);
        this.app.use(this.apiPaths.ventas, ventas_1.default);
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