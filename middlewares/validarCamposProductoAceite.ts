import { validarCampos, check } from "./validationResult";


export const validarAceite = [
    check("marca", "Ingrese un nombre de marca válido")
        .isString()
        .trim()
        .notEmpty(),
    check("cantidad", "Ingrese la cantidad de aceites de esta marca que tiene en su tienda")
        .trim()
        .notEmpty()
        .isLength({min: 1, max: 255}),
    check("precio", "Ingrese un precio ")
        .trim()
        .notEmpty(),
    check("stock", "Ingrese un si o no ")
        .trim()
        .notEmpty(),
    validarCampos,
]