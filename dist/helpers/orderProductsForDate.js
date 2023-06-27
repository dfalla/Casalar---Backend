"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderDate = void 0;
function orderDate(arr) {
    for (let i = 0; i < arr.length; i++) {
        const date = (new Date(`${arr[i].created_at}`)).getTime();
        arr[i].timesCreate = date;
    }
    const newArrDate = arr.sort((a, b) => a.timesCreate - b.timesCreate);
    for (let i = 0; i < newArrDate.length; i++) {
        delete arr[i].timesCreate;
    }
    return newArrDate;
}
exports.orderDate = orderDate;
//# sourceMappingURL=orderProductsForDate.js.map