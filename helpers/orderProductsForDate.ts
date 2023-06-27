interface OrderDateArgs {
    id_producto: string;
    marca: string;
    precio: number;
    stock: number;
    descripcion: string;
    imagen: string;
    imagen_public_id: string;
    created_at: string;
    timesCreate?: number;
}

export function orderDate(arr: OrderDateArgs[]){
    for (let i = 0; i < arr.length; i++) {
        const date = (new Date(`${arr[i].created_at}`)).getTime();
        arr[i].timesCreate = date;
    }

    const newArrDate = arr.sort((a,b) => a.timesCreate! - b.timesCreate!)

    for (let i = 0; i < newArrDate.length; i++) {
        delete  arr[i].timesCreate;
        
    }

    return newArrDate;
}