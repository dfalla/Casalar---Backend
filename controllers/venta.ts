import {Request, Response} from 'express';
import { Venta } from '../models';

export const getAllVentas = async (req: Request, res: Response)=>{

    try {
        const ventas = await Venta.findAll();
        // console.log("productos", productos)
        return res.json({
            ventas
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Error de servidor'
        });
    }
}

export const createVenta = async (req: Request, res: Response)=>{

    const { ventas } = req.body;

    const arrVentas = JSON.parse(ventas);

    try {
        await Venta.bulkCreate(arrVentas)
        res.status(200).json({ message: 'Datos guardados exitosamente' });
    } catch (error) {
        console.error('Error al guardar los datos:', error);
        res.status(500).json({ error: 'Error al guardar los datos' });
    }
    
}

