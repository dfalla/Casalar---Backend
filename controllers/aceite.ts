import {Request, Response} from 'express';
import { Aceite } from '../models/Aceite';
import { deleteImage, uploadImage } from '../libs/cloudinary';
import fs from 'fs-extra';


export const getAceites = async (req: Request, res: Response)=>{

    try {
        const aceites = await Aceite.findAll();
        return res.json({
            aceites
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
}

export const getAceite = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const aceite = await Aceite.findByPk(id);

        if(!aceite) {
             return res.status(404).json({
                error: "No existe el aceite"
            });
        }

        return res.json({
            aceite
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }

}

export const createAceite = async (req: Request, res: Response)=>{
    try {

        const {cantidad, marca, precio, stock} = req.body;
        let image;
        let image_public_id;

        try {
            const existeAceite = await Aceite.findOne({
                where: {
                    marca: marca
                }
            })

            if(existeAceite){
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

            await Aceite.create({
                marca,
                cantidad,
                precio,
                stock,
                imagen: image,
                imagen_public_id: image_public_id
            })

            res.json({
                msg: `El aceite con la marca ${marca} fue registrado exitosamente!`
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

export const updateAceite = async (req: Request, res: Response)=>{
    try {
        
        const {id} = req.params;
        const { cantidad, marca, precio, stock } = req.body;

        let image;
        let image_public_id;

        const aceite = await Aceite.findByPk(id);

        if(!aceite){
            return res.status(404).json({
                msg: 'No existe un aceite con el id ' + id
            });
        }

        await deleteImage(aceite.dataValues.imagen_public_id)

        if(req.files!.imagen){
            const result = await uploadImage(req.files!.imagen.tempFilePath);
            await fs.remove(req.files!.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }

        await Aceite.update( 
            {
                cantidad,
                marca,
                precio,
                stock,
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
            msg: "aceite actualizado correctamente",
            aceite
        } );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteAceite = async (req: Request, res: Response)=>{
    try {

        const { id } = req.params;

        const aceite = await Aceite.findByPk( id );
        if ( !aceite) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }

        await aceite.destroy();

        await deleteImage(aceite.dataValues.imagen_public_id)

        res.json({
            msg: "Aceite eliminado correctamente",
            aceite
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}
