"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plainToClassMany = exports.plainToClass = void 0;
const class_transformer_1 = require("class-transformer");
function plainToClass(plainObject, targetClass) {
    return (0, class_transformer_1.plainToClass)(targetClass, plainObject);
}
exports.plainToClass = plainToClass;
function plainToClassMany(plainList, targetClass) {
    return plainList.map((plainItem) => (0, class_transformer_1.plainToClass)(targetClass, plainItem));
}
exports.plainToClassMany = plainToClassMany;
//# sourceMappingURL=plain-to-class.js.map