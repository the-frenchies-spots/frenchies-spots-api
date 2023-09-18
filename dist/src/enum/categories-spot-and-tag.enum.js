"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesSpotAndTag = void 0;
const graphql_1 = require("@nestjs/graphql");
var CategoriesSpotAndTag;
(function (CategoriesSpotAndTag) {
    CategoriesSpotAndTag["SPARE_TIME_SPOT"] = "SPARE_TIME_SPOT";
    CategoriesSpotAndTag["RESOURCES_SPOT"] = "RESOURCES_SPOT";
})(CategoriesSpotAndTag || (exports.CategoriesSpotAndTag = CategoriesSpotAndTag = {}));
(0, graphql_1.registerEnumType)(CategoriesSpotAndTag, {
    name: 'CategoriesSpotAndTag',
    description: 'Les catégories pour les spots et les tags',
});
//# sourceMappingURL=categories-spot-and-tag.enum.js.map