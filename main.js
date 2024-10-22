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
let newOrder1 = (0, ordine_module_1.createOrder)(1, 1, 1, ['cosa1,cosa2']);
let newOrder2 = (0, ordine_module_1.createOrder)(2, 1, 1, ['cosa1,cosa2']);
let newUser1 = (0, utente_module_1.createUser)('jhonny', 'pw', 1, ['uno,due'], [newOrder1, newOrder2]);
let newUser2 = (0, utente_module_1.createUser)('Jerry', 'pw', 1, ['uno,due']);
console.log(newUser1);
console.log(newUser2);
