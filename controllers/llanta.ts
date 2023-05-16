import {Request, Response} from 'express';
import { Aceite } from '../models/Aceite';
import { deleteImage, uploadImage } from '../libs/cloudinary';
import fs from 'fs-extra';
import { LLanta } from '../models';


export const getLlantas = async (req: Request, res: Response)=>{

    try {
        const productos = await LLanta.findAll();
        return res.json({
            productos: productos.reverse()
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
}

export const getLlanta = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const producto = await LLanta.findByPk(id);

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

export const createLlanta = async (req: Request, res: Response)=>{

    console.log("req.body desde el controlador", req.body);
        try {

        const {cantidad, marca, precio, stock, descripcion} = req.body;
        let image;
        let image_public_id;

        try {
            const existeProducto = await LLanta.findOne({
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

            await LLanta.create({
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                cantidad,
                precio: parseFloat(precio),
                stock,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id
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

export const updateLlanta = async (req: Request, res: Response)=>{
    try {
        
        const {id} = req.params;
        const { cantidad, marca, precio, stock, descripcion } = req.body;

        let image;
        let image_public_id;

        const producto = await LLanta.findByPk(id);

        if(!producto){
            return res.status(404).json({
                msg: 'No existe una producto con el id ' + id
            });
        }

        await deleteImage(producto.dataValues.imagen_public_id)

        if(req.files!.imagen){
            const result = await uploadImage(req.files!.imagen.tempFilePath);
            await fs.remove(req.files!.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }

        await LLanta.update( 
            {
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
                cantidad,
                precio: parseFloat(precio),
                stock,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id,
            }, 
            { 
                where: {
                    id: id,
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

export const deleteLlanta = async (req: Request, res: Response)=>{
    try {

        const { id } = req.params;

        const producto = await LLanta.findByPk( id );
        if ( !producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }

        await producto.destroy();

        await deleteImage(producto.dataValues.imagen_public_id)

        res.json({
            msg: " Producto eliminado correctamente",
            producto
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}
