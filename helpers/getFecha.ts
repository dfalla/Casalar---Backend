export const getFecha = () => {

    const date = new Date();

    const fecha = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    return fecha;

}