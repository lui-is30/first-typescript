/*type userType={
    username:string;
    password:string;
    status:number;
    permissions:string[];
}

const user:userType={
    username:'admin',
    password:'admin',
    status:1,
    permissions:['read','write','delete']
}

console.log(user.username);

type RolesType='Admin'|'Guest';*/


/**
 * Creare un nuovo utente (funzione). L'utente ha username,password,status e permissions
 * Creare un ordine con un id , un totale , imponibile, iva , e una lista di prodotti
 * assegnare all'utente gli ordini
 * visualizzare l'utente con i suoi ordini associati
 */


import { User } from "./utente.module";
import { createUser } from "./utente.module";
import { Ordini,createOrder } from "./ordine.module";



let newOrder1:Ordini=createOrder(1,1,1,['cosa1,cosa2']);
let newOrder2:Ordini=createOrder(2,1,1,['cosa1,cosa2']);

let newUser1:User=createUser('jhonny','pw',1,['uno,due'],[newOrder1,newOrder2]);
let newUser2:User=createUser('Jerry','pw',1,['uno,due']);

console.log(newUser1);
console.log(newUser2);


