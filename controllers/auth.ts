import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import { generarJWT } from '../helpers/jwt';

export const registerUser = async (req: Request, res: Response) => {

    const { nombre, apellido, username, password } = req.body;

    // Validamos si el usuario ya existe en la base de datos
    const user = await User.findOne({ where: { username: username } });

    if(user) {
       return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${username}`
        })
    } 
 
    const hashedPassword = await bcrypt.hash(password, 10);
    
    try {
        // Guardarmos usuario en la base de datos
        await User.create({
            nombre, 
            apellido,
            username: username,
            password: hashedPassword
        })
    
        res.json({
            msg: `Usuario ${username} creado exitosamente!`
        })
    } catch (error) {
        res.status(400).json({
            msg: 'Upps ocurrio un error',
            error
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {

    const { username, password } = req.body;

   // Validamos si el usuario existe en la base de datos
   try {
    const user: any = await User.findOne({ where: { username: username } });

   if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${username} en la base datos`
        })
   }

   // Validamos password
   const passwordValid = await bcrypt.compare(password, user.password)
   if(!passwordValid) {
    return res.status(400).json({
        msg: `Password Incorrecta`
    })
   }

   // Generamos token
   const token = await generarJWT({uid: user.id, name: user.nombre});
   console.log('token',token)
   
    res.json({
        ok:true,
        msg: 'Usuario Logueado',
        uid: user.id,
        name: user.nombre,
        token
    })
   } catch (error) {
    console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
   }
}

export const revalidarToken = async(req: Request, res: Response) => {

    const { uid, name } = req.body;

    //generar un nuevo JWT y retornarlo en esta peticion
    const token = await generarJWT({uid, name});

    res.json({
        ok: true, 
        name,
        uid,
        token
        
    })
}