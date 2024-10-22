"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = void 0;
const createOrder = (id, totale, iva, lista_prodotti) => {
    let order = {
        id: id,
        totale: totale,
        iva: iva,
        lista_prodotti: lista_prodotti
    };
    return order;
};
exports.createOrder = createOrder;
//# sourceMappingURL=ordine.module.js.map