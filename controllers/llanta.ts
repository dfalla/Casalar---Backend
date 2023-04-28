import {Request, Response} from 'express';
import { Aceite } from '../models/Aceite';
import { deleteImage, uploadImage } from '../libs/cloudinary';
import fs from 'fs-extra';
import { LLanta } from '../models';


export const getLlantas = async (req: Request, res: Response)=>{

    try {
        const llantas = await LLanta.findAll();
        return res.json({
            llantas: llantas.reverse()
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
        const llanta = await LLanta.findByPk(id);

        if(!llanta) {
             return res.status(404).json({
                error: "No existe el producto"
            });
        }

        return res.json({
            llanta
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
            const existeLlanta = await LLanta.findOne({
                where: {
                    marca: marca
                }
            })

            if(existeLlanta){
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
                msg: `La llanta con la marca ${marca} fue registrado exitosamente!`
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

        const llanta = await LLanta.findByPk(id);

        if(!llanta){
            return res.status(404).json({
                msg: 'No existe una llanta con el id ' + id
            });
        }

        await deleteImage(llanta.dataValues.imagen_public_id)

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
            msg: "Llanta actualizado correctamente",
            llanta
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

        const llanta = await LLanta.findByPk( id );
        if ( !llanta) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }

        await llanta.destroy();

        await deleteImage(llanta.dataValues.imagen_public_id)

        res.json({
            msg: " Producto llanta eliminado correctamente",
            llanta
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}
