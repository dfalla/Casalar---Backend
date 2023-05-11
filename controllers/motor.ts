import {Request, Response} from 'express';
import { Motor } from '../models/Motor';
import { deleteImage, uploadImage } from '../libs/cloudinary';
import fs from 'fs-extra';


export const getMotores = async (req: Request, res: Response)=>{

    try {
        const motores = await Motor.findAll();
        return res.json({
            motores: motores.reverse()
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error de servidor hola'
        });
    }
}

export const getMotor = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const motor = await Motor.findByPk(id);

        if(!motor) {
             return res.status(404).json({
                error: "No existe el motor"
            });
        }

        return res.json({
            motor
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }

}

export const createMotor = async (req: Request, res: Response)=>{
    
    try {

        const {marca, precio, stock, descripcion} = req.body;
        console.log("req.body desde createAceite", req.body);
        let image;
        let image_public_id;

        try {
            const existeMotor = await Motor.findOne({
                where: {
                    marca: marca
                }
            })

            if(existeMotor){
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

            await Motor.create({
                marca: marca.split('')[0].toUpperCase() + marca.slice(1),
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

export const updateMotor = async (req: Request, res: Response)=>{
    try {
        
        const {id} = req.params;
        const { marca, precio, stock, descripcion } = req.body;

        let image;
        let image_public_id;

        const motor = await Motor.findByPk(id);

        if(!motor){
            return res.status(404).json({
                msg: 'No existe un motor con el id ' + id
            });
        }

        await deleteImage(motor.dataValues.imagen_public_id)

        if(req.files!.imagen){
            const result = await uploadImage(req.files!.imagen.tempFilePath);
            await fs.remove(req.files!.imagen.tempFilePath);
            image = result.secure_url;
            image_public_id = result.public_id;
        }

        await Motor.update( 
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
                    id: id,
                }
            }
        );
        

        res.json( {
            msg: "Producto actualizado correctamente",
            motor
        } );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteMotor = async (req: Request, res: Response)=>{
    try {

        const { id } = req.params;

        const motor = await Motor.findByPk( id );
        if ( !motor) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }

        await motor.destroy();

        await deleteImage(motor.dataValues.imagen_public_id)

        res.json({
            msg: "Producto eliminado correctamente",
            motor
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}