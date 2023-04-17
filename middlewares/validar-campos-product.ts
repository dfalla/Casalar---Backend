import { validarCampos, check } from "./validationResult";


export const validarProducto = [
    check("nombre", "Ingrese un nombre válido")
        .isString()
        .trim()
        .notEmpty(),
    check("descripcion", "Ingrese una descripción válida")
        .trim()
        .notEmpty()
        .isLength({min: 6, max: 255}),
    validarCampos,
]