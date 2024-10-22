"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const createUser = (username, password, status, permisisons, ordini) => {
    let User = {
        username: username,
        password: password,
        status: status,
        permissions: permisisons,
        ordini: ordini
    };
    return User;
};
exports.createUser = createUser;
//# sourceMappingURL=utente.module.js.map