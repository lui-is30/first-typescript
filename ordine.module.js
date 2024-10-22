"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const createOrder = (id, totale, iva, lista_prodotti, username) => {
    let order = {
        id: id,
        totale: totale,
        iva: iva,
        lista_prodotti: lista_prodotti,
        username: username
    };
    return order;
};
exports.createOrder = createOrder;
