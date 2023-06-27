import {Request, Response} from 'express';
import { NombreProducto } from '../models';
import { deleteImage, uploadImage } from '../libs/cloudinary';
import fs from 'fs-extra';


export const getNombresDeProductos = async (req: Request, res: Response)=>{

    try {
        const productos = await NombreProducto.findAll();
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

export const getNombreDeProducto = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const producto = await NombreProducto.findByPk(id);

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

export const createNombreDeProducto = async (req: Request, res: Response)=>{
    
    try {

        const { nombre, value } = req.body;

        try {
            const existeProducto = await NombreProducto.findOne({
                where: {
                    nombre: nombre
                }
            })

            if(existeProducto){
                return res.status(400).json({
                    msg: `Ya existe el producto ${nombre}`
                });
            }

            await NombreProducto.create({
                nombre: nombre.split('')[0].toUpperCase() + nombre.slice(1),
                value,
               
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

export const updateNombreDeProducto = async (req: Request, res: Response)=>{
    try {
        
        const {id} = req.params;
        const { nombre } = req.body;


        const producto = await NombreProducto.findByPk(id);

        if(!producto){
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }

        await NombreProducto.update( 
            {
                nombre: nombre.split('')[0].toUpperCase() + nombre.slice(1),
               
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

export const deleteNombreDeProducto = async (req: Request, res: Response)=>{
    try {

        const { id } = req.params;

        const producto = await NombreProducto.findByPk( id );
        if ( !producto) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }

        await producto.destroy();

        res.json({
            msg: "Producto eliminado correctamente",
            producto
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}