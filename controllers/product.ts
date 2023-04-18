import {Request, Response} from 'express';
import { Product } from '../models/product';
import { deleteImage, uploadImage } from '../libs/cloudinary';
import fs from 'fs-extra';


export const getProducts = async (req: Request, res: Response)=>{

    try {
        const productos = await Product.findAll();
        return res.json({
            productos
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
}

export const getProduct = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;
        const producto = await Product.findByPk(id);

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
export const createProduct = async (req: Request, res: Response)=>{
    try {

        const {nombre, descripcion} = req.body;
        let image;
        let image_public_id;

        if(req.files!.imagen){
            console.log(typeof req.files!.imagen)
        //    const result = await uploadImage(req.files!.imagen.tempFilePath);
           
        //    await fs.remove(req.files!.imagen.tempFilePath);

        //     image = result.secure_url;
        //     image_public_id = result.public_id;
                
        }

        try {
            const existeProducto = await Product.findOne({
                where: {
                    nombre: nombre
                }
            })

            if(existeProducto){
                return res.status(400).json({
                    msg: 'Ya existe un producto con esa categoria ' + nombre
                });
            }

            await Product.create({
                nombre,
                descripcion,
                imagen: image,
                imagen_public_id: image_public_id
            })

            res.json({
                msg: `Producto ${nombre} creado exitosamente!`
            })
        } catch (error) {
            console.log(error)
        }
        
    } catch (error) {
        // if(error.code === 11000) return res.status(400).json({
        //     error : "Ya existe un alumno registrado con ese número de DNI"
        // });
        // return res.status(500).json({
        //     error: 'Error de servidor'
        // });
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}
export const updateProduct = async (req: Request, res: Response)=>{
    try {
        
        const {id} = req.params;
        const { nombre, descripcion } = req.body;

        let image;
        let image_public_id;

        const producto = await Product.findByPk(id);

        if(!producto){
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }

        await deleteImage(producto.dataValues.imagen_public_id)

        if(req.files!.imagen){
            // const result = await uploadImage(req.files!.imagen.tempFilePath);
            // await fs.remove(req.files!.imagen.tempFilePath);
            // image = result.secure_url;
            // image_public_id = result.public_id;
        }

        await Product.update( 
            {
                nombre,
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
            msg: "producto actualizado correctamente",
            producto
        } );

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const deleteProduct = async (req: Request, res: Response)=>{
    try {
        const { id } = req.params;

        const producto = await Product.findByPk( id );
        if ( !producto) {
            return res.status(404).json({
                msg: 'No existe un priducto con el id ' + id
            });
        }

        console.log("producto", producto)


        await Product.destroy();

       
        await deleteImage(producto.dataValues.imagen_public_id)

        res.json({
            msg: "producto eliminado correctamente",
            producto
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Error de servidor'});
    }
}
