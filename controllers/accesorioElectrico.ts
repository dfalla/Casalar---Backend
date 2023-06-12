import {Request, Response} from 'express';
import { AccesorioElectrico } from '../models';
import { deleteImage, uploadImage } from '../libs/cloudinary';
import fs from 'fs-extra';
import { getFecha } from '../helpers/getFecha';


export const getAccesoriosElectricos = async (req: Request, res: Response)=>{

    try {
        const productos = await AccesorioElectrico.findAll();
        return res.json({
            productos: productos.reverse()
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error de servidor hola'
        });
    }
}

export const getAccesorioElectrico = async (req: Request, res: Response)=>{
    try {
        const { id_producto } = req.params;
        const producto = await AccesorioElectrico.findByPk(id_producto);

        if(!producto) {
             return res.status(404).json({
                error: "No existe el producto"
            });
        }

        return res.json({
            producto
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }

}

export const createAccesorioElectrico = async (req: Request, res: Response)=>{
    
    try {

        const {id_producto, marca, precio, stock, descripcion} = req.body;

        const fecha = getFecha()

        console.log("req.body desde createAceite", req.body);
        let image;
        let image_public_id;

        try {
            const existeProducto = await AccesorioElectrico.findOne({
                where: {
                    marca: marca
                }
            })

            if(existeProducto){
                return res.status(400).json({
                    msg: `Ya existe un producto con esa marca ${marca}`
                });
            }

            if(req.files!.imagen){
                const result = await uploadImage(req.files!.imagen.tempFilePath);
               
                await fs.remove(req.files!.imagen.tempFilePath);
    
                image = result.secure_url;
    
                image_public_id = result.public_id;
            }

            await AccesorioElectrico.create({
                id_producto,
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                precio: parseFloat(precio),
                stock,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id, 
                created_at: fecha
            })

            res.json({
                msg: `Producto registrado exitosamente!`
            })

        } catch (error) {
            console.log(error)
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const updateAccesorioElectrico = async (req: Request, res: Response)=>{
    try {
        
        const {id_producto} = req.params;
       
        const { marca, precio, stock, descripcion } = req.body;

        let image;
        let image_public_id;

        const producto = await AccesorioElectrico.findByPk(id_producto);

        if(!producto){
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id_producto
            });
        }

        await deleteImage(producto.dataValues.imagen_public_id)

        if(req.files!.imagen){
            const result = await uploadImage(req.files!.imagen.tempFilePath);
            await fs.remove(req.files!.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }

        await producto.update( 
            {
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                precio: parseFloat(precio),
                stock,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id,
            }, 
            { 
                where: {
                    id: id_producto,
                }
            }
        );
        

        res.json( {
            msg: "Producto actualizado correctamente",
            producto
        } );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteAccesorioElectrico = async (req: Request, res: Response)=>{
    try {

        const { id_producto } = req.params;

        const producto = await AccesorioElectrico.findByPk( id_producto );
        if ( !producto) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id_producto
            });
        }

        await producto.destroy();

        await deleteImage(producto.dataValues.imagen_public_id)

        res.json({
            msg: "Producto eliminado correctamente",
            producto
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}
