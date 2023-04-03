import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface IPayload {
    id: string;
    iat: number;
}

export const validarJWT = (req: Request, res: Response, next: NextFunction) => {
    // x-token headers

    const token = req.header('x-token');
    
    if( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        })
    }

    try {

        jwt.verify(token, process.env.SECRET_JWT_SEED || 'Casalar2023');

        

        next();
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'token no válido'
        })
    }


}
