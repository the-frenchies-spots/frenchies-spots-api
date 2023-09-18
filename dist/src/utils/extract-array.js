"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractArray = void 0;
function extractArray(value, list) {
    const extractArray = [];
    for (const val of list) {
        if (val !== value) {
            extractArray.push(val);
        }
    }
    return extractArray;
}
exports.extractArray = extractArray;
//# sourceMappingURL=extract-array.js.map