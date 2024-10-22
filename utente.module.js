"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const createUser = (username, password, status, permisisons) => {
    let User = {
        username: username,
        password: password,
        status: status,
        permissions: permisisons
    };
    return User;
};
exports.createUser = createUser;
