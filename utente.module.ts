export type User ={
    username:string;
    password:string;
    status:number;
    permissions:string[];
}


export const createUser=(username:string,password:string,status:number,permisisons:string[])=>{
    let User={
        username:username,
        password:password,
        status:status,
        permissions:permisisons
    }
    return User;
}