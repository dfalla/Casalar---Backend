import { Request, Response, NextFunction } from 'express';
import { validationResult, check } from 'express-validator';

const validarCampos = (req: Request, res: Response, next: NextFunction) =>{
    console.log("req.body", req.body)
    const errors = validationResult( req );
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.mapped()
        });
    }

    next();
}

export {
    validarCampos, 
    check
}