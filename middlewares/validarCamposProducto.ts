import { validarCampos, check } from "./validationResult";


export const validarProducto = [
    check("marca", "Ingrese un nombre de marca válido")
        .isString()
        .trim()
        .notEmpty(),
    check("precio", "Ingrese un precio ")
        .trim()
        .notEmpty(),
    check("stock", "Ingrese un stock ")
        .trim()
        .notEmpty(),
    check("descripcion", "Ingrese una descripcion ")
        .trim()
        .notEmpty()
        .isLength({min: 1, max: 255}),
    validarCampos,
]

export const validarNombreDeProducto = [
    check("nombre", "Ingrese un nombre de marca válido")
        .isString()
        .trim()
        .notEmpty(),
    validarCampos,
]

export const validarVenta = [
    check("cantidad", "Ingrese una cantidad")
        .isNumeric()
        .trim()
        .notEmpty(),
    check("subtotal", "Ingrese una cantidad")
        .isDecimal()
        .trim()
        .notEmpty(),
    check("marca", "Ingrese una cantidad")
        .trim()
        .notEmpty(),
    check("producto", "Ingrese una cantidad")
        .trim()
        .notEmpty(),
    validarCampos
]