import {Request, Response} from 'express';
import { Product } from '../models/product';

export const getProducts = async (req: Request, res: Response)=>{

    const products = await Product.findAll();

    res.json({products})
}

export const getProduct = async (req: Request, res: Response)=>{
    const { id } = req.params;

    const product = await Product.findByPk( id );

    if( product ) {
        res.json({product});
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${ id }`
        });
    }

}
export const createProduct = async (req: Request, res: Response)=>{
    const { body } = req;
    const { nombre, descripcion } = body;
    console.log("file",req.file);

    try {
        
        const existeProduct = await Product.findOne({
            where: {
                nombre: nombre
            }
        });

        if (existeProduct) {
            return res.status(400).json({
                msg: 'Ya existe un producto con esa categoria ' + nombre
            });
        }


        try {
            await Product.create({
                nombre, 
                descripcion
            })
        
            res.json({
                msg: `Producto ${nombre} creado exitosamente!`
            })
        } catch (error) {
            
        }

    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }
}
export const updateProduct = async (req: Request, res: Response)=>{
    const { id }   = req.params;
    const { body } = req;

    try {
        
        const product = await Product.findByPk( id );
        if ( !product ) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }

        await product.update( body );

        res.json( {
            msg: "producto eliminado correctamente",
            product
        } );


    } catch (error) {

        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        })    
    }   
}

export const deleteProduct = async (req: Request, res: Response)=>{
    const { id } = req.params;

    const product = await Product.findByPk( id );
    if ( !product ) {
        return res.status(404).json({
            msg: 'No existe un priducto con el id ' + id
        });
    }


    await product.destroy();


    res.json({
        msg: "producto eliminado correctamente",
        product
    });
}
