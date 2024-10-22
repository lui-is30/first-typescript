import { Ordini } from "./ordine.module";

export type User ={
    username:string;
    password:string;
    status:number;
    permissions:string[];
    ordini?:Ordini[];
}


export const createUser=(username:string,password:string,status:number,permisisons:string[],ordini?:Ordini[])=>{
    let User={
        username:username,
        password:password,
        status:status,
        permissions:permisisons,
        ordini:ordini
    }
    return User;
}