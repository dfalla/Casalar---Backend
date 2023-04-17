import { validarCampos, check} from "./validationResult";

export const validarCamposRegistro = 
[   //middlewares
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),

    check('username', 'El username es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser de 6 caracteres como mínimo').isLength({min: 6}),
    // check('password', 'El password debe de ser de 15 caracteres como máximo').isLength({max: 15}),
    validarCampos
];


export const validarCamposLogin = 
[
    check('username', 'El username es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser de 6 caracteres como mínimo').isLength({min:6}),
    validarCampos
];