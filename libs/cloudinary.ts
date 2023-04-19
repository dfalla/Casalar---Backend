import { v2 } from 'cloudinary';

v2.config({
    //encontramos estos datos en dashboard
    cloud_name: "dw00hohia",
    api_key: "441334416557292",
    api_secret: "4AMTDVH4gPD6FOsbAcJwZngNYfQ"
})

export const uploadImage = async(filePath: any) => {
    // filePath puede ser el archivo, la ruta donde está el archivo o incluso el string del archivo o un dato crudo del archivo
    //subir el archivo a los servicios de cloudinary
    return await v2.uploader.upload(filePath, {
        folder: 'motorepuestos/aceites' //nombre de la carpeta que está en cloudinary
    });
}

export const deleteImage = async(public_id: any) => {
    return await v2.uploader.destroy(public_id);
}
