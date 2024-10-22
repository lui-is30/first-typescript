"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const utente_module_1 = require("./utente.module");
const ordine_module_1 = require("./ordine.module");
let newUser1 = (0, utente_module_1.createUser)('jhonny', 'pw', 1, ['uno,due']);
let newUser2 = (0, utente_module_1.createUser)('Jerry', 'pw', 1, ['uno,due']);
let newOrder1 = (0, ordine_module_1.createOrder)(1, 1, 1, ['cosa1,cosa2'], 'jhonny');
let newOrder2 = (0, ordine_module_1.createOrder)(2, 1, 1, ['cosa1,cosa2'], 'jhonny');
let control = 0;
console.log(newUser1.username + ' ha gli ordini:');
if (newOrder1.username === newUser1.username) {
    console.log(newOrder1.lista_prodotti);
    control = 1;
}
if (newOrder2.username === newUser1.username) {
    console.log(newOrder2.lista_prodotti);
    control = 1;
}
if (control === 0) {
    console.log("0 ordini");
}
control = 0;
console.log(newUser2.username + ' ha gli ordini:');
if (newOrder1.username === newUser2.username) {
    console.log(newOrder1.lista_prodotti);
    control = 1;
}
if (newOrder2.username === newUser2.username) {
    console.log(newOrder2.lista_prodotti);
    control = 1;
}
if (control === 0) {
    console.log("0 ordini");
}
