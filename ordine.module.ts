export type Ordini={
    id:number;
    totale:number;
    iva:number;
    lista_prodotti:string[];
}

export const createOrder=(id:number,totale:number,iva:number,lista_prodotti:string[])=>{
    let order:Ordini={
        id:id,
        totale:totale,
        iva:iva,
        lista_prodotti:lista_prodotti
    }
    return order;
}