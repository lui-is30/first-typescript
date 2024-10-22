export type Ordini={
    id:number;
    totale:number;
    iva:number;
    lista_prodotti:string[];
    username:string;
}

export const createOrder=(id:number,totale:number,iva:number,lista_prodotti:string[],username:string)=>{
    let order:Ordini={
        id:id,
        totale:totale,
        iva:iva,
        lista_prodotti:lista_prodotti,
        username:username
    }
    return order;
}