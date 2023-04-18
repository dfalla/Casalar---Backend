import { v2 } from 'cloudinary';

v2.config({
    //encontramos estos datos en dashboard
    cloud_name: "dlbsdgti4",
    api_key: "788452112121486",
    api_secret: "f6poooy3tdG9-3wKUvk6ucRn5lM"
})

export const uploadImage = async(filePath: any) => {
    // filePath puede ser el archivo, la ruta donde está el archivo o incluso el string del archivo o un dato crudo del archivo
    //subir el archivo a los servicios de cloudinary
    return await v2.uploader.upload(filePath, {
        folder: 'productos' //nombre de la carpeta que está en cloudinary
    });
}

export const deleteImage = async(public_id: any) => {
    return await v2.uploader.destroy(public_id);
}
