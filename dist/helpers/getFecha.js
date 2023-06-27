"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFecha = void 0;
const getFecha = () => {
    const date = new Date();
    const times_created = date.getTime();
    const fecha = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return {
        fecha,
        times_created
    };
};
exports.getFecha = getFecha;
//# sourceMappingURL=getFecha.js.map