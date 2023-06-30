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
exports.createVenta = void 0;
const models_1 = require("../models");
// export const getAccesoriosElectricos = async (req: Request, res: Response)=>{
//     try {
//         const productos = await AccesorioElectrico.findAll();
//         // console.log("productos", productos);
//         return res.json({
//             productos: productos.reverse()
//         });
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             error: 'Error de servidor hola'
//         });
//     }
// }
// export const getAccesorioElectrico = async (req: Request, res: Response)=>{
//     try {
//         const { id_producto } = req.params;
//         const producto = await AccesorioElectrico.findByPk(id_producto);
//         console.log("producto ⚽", producto);
//         if(!producto) {
//              return res.status(404).json({
//                 error: "No existe el producto"
//             });
//         }
//         return res.json({
//             producto
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             error: 'Error de servidor'
//         });
//     }
// }
const createVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const arr = Object.values(req.body);
    console.log("array", req.body);
    // console.log("venta a registrar 😁", req.body)
    try {
        const respuesta = yield models_1.Venta.bulkCreate(req.body);
        console.log("respuesta", respuesta);
        res.status(200).json({ message: 'Datos guardados exitosamente' });
    }
    catch (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).json({ error: 'Error al guardar los datos' });
    }
    // try {
    //     const {id_producto, marca, precio, stock, descripcion} = req.body;
    //     const { fecha, times_created } = getFecha();
    //     let image;
    //     let image_public_id;
    //     try {
    //         const existeProducto = await AccesorioElectrico.findOne({
    //             where: {
    //                 marca: marca
    //             }
    //         })
    //         if(existeProducto){
    //             return res.status(400).json({
    //                 msg: `Ya existe un producto con esa marca ${marca}`
    //             });
    //         }
    //         if(req.files === null){
    //             await AccesorioElectrico.create({
    //                 id_producto,
    //                 marca: marca.split('')[0].toUpperCase() + marca.slice(1),
    //                 precio: parseFloat(precio),
    //                 stock,
    //                 descripcion,
    //                 created_at: fecha,
    //                 times_created
    //             })
    //         } else {
    //             const result = await uploadImage(req.files!.imagen.tempFilePath);
    //             await fs.remove(req.files!.imagen.tempFilePath);
    //             image = result.secure_url;
    //             image_public_id = result.public_id;
    //             await AccesorioElectrico.create({
    //                 id_producto,
    //                 marca: marca.split('')[0].toUpperCase() + marca.slice(1),
    //                 precio: parseFloat(precio),
    //                 stock,
    //                 descripcion,
    //                 imagen: image,
    //                 imagen_public_id: image_public_id, 
    //                 created_at: fecha,
    //                 times_created
    //             })
    //         }
    //         res.json({
    //             msg: `Producto registrado exitosamente!`
    //         })
    //     } catch (error) {
    //         console.log(error)
    //     }
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         msg: 'Hable con el administrador'
    //     })
    // }
});
exports.createVenta = createVenta;
// export const updateAccesorioElectrico = async (req: Request, res: Response)=>{
//     console.log("file 🤑", req.files)
//     try {
//         const {id_producto} = req.params;
//         const { marca, precio, stock, descripcion } = req.body;
//         let image;
//         let image_public_id;
//         const producto = await AccesorioElectrico.findByPk(id_producto);
//         console.log("producto ⚽", producto);
//         if(!producto){
//             return res.status(404).json({
//                 msg: 'No existe un producto con el id ' + id_producto
//             });
//         }
//         if(req.files === null){
//             await producto.update(
//                 {
//                     marca: marca.split('')[0].toUpperCase() + marca.slice(1),
//                     precio: parseFloat(precio),
//                     stock,
//                     descripcion,
//                 }, 
//                 { 
//                     where: {
//                         id: id_producto,
//                     }
//                 }
//             );
//         } else {
//             if(producto.dataValues.imagen_public_id){
//                 await deleteImage(producto.dataValues.imagen_public_id)
//             } else {
//                 const result = await uploadImage(req.files!.imagen.tempFilePath);
//                 await fs.remove(req.files!.imagen.tempFilePath);
//                 image = result.secure_url;
//                 image_public_id = result.public_id;
//                 await producto.update( 
//                     {
//                         marca: marca.split('')[0].toUpperCase() + marca.slice(1),
//                         precio: parseFloat(precio),
//                         stock,
//                         descripcion,
//                         imagen: image,
//                         imagen_public_id: image_public_id,
//                     }, 
//                     { 
//                         where: {
//                             id: id_producto,
//                         }
//                     }
//                 );
//             }
//         }
//         res.json( {
//             msg: "Producto actualizado correctamente",
//             producto
//         } );
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             msg: 'Hable con el administrador'
//         })
//     }
// }
// export const deleteAccesorioElectrico = async (req: Request, res: Response)=>{
//     try {
//         const { id_producto } = req.params;
//         const producto = await AccesorioElectrico.findByPk( id_producto );
//         if ( !producto) {
//             return res.status(404).json({
//                 msg: 'No existe un priducto con el id ' + id_producto
//             });
//         }
//         await producto.destroy();
//         await deleteImage(producto.dataValues.imagen_public_id)
//         res.json({
//             msg: "Producto eliminado correctamente",
//             producto
//         });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({error: 'Error de servidor'});
//     }
// }
//# sourceMappingURL=venta.js.map