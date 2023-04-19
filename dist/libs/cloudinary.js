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
exports.deleteImage = exports.uploadImage = void 0;
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    //encontramos estos datos en dashboard
    cloud_name: "dw00hohia",
    api_key: "441334416557292",
    api_secret: "4AMTDVH4gPD6FOsbAcJwZngNYfQ"
});
const uploadImage = (filePath) => __awaiter(void 0, void 0, void 0, function* () {
    // filePath puede ser el archivo, la ruta donde está el archivo o incluso el string del archivo o un dato crudo del archivo
    //subir el archivo a los servicios de cloudinary
    return yield cloudinary_1.v2.uploader.upload(filePath, {
        folder: 'motorepuestos/aceites' //nombre de la carpeta que está en cloudinary
    });
});
exports.uploadImage = uploadImage;
const deleteImage = (public_id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield cloudinary_1.v2.uploader.destroy(public_id);
});
exports.deleteImage = deleteImage;
//# sourceMappingURL=cloudinary.js.map