import { validarCampos, check } from "./validationResult";


export const validarProducto = [
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
    check("descripcion", "Ingrese una descripcion ")
        .trim()
        .notEmpty()
        .isLength({min: 1, max: 255}),
    validarCampos,
]