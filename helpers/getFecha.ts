export const getFecha = () => {

    const date = new Date();

    const times_created = date.getTime();
    const fecha = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    return {
        fecha,
        times_created
    };

}