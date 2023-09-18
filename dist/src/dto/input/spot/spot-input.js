"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const spot_picture_input_1 = require("../spot-picture/spot-picture-input");
const graphql_type_json_1 = require("graphql-type-json");
const categories_spot_and_tag_enum_1 = require("../../../enum/categories-spot-and-tag.enum");
const location_entity_1 = require("../../../entity/location.entity");
let SpotInput = class SpotInput {
};
exports.SpotInput = SpotInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotInput.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SpotInput.prototype, "isCanPark", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SpotInput.prototype, "isHidden", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: categories_spot_and_tag_enum_1.CategoriesSpotAndTag,
        default: categories_spot_and_tag_enum_1.CategoriesSpotAndTag.SPARE_TIME_SPOT,
    }),
    __metadata("design:type", String)
], SpotInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.default, { nullable: true }),
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", location_entity_1.LocationEntity)
], SpotInput.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotInput.prototype, "region", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotInput.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(() => [spot_picture_input_1.SpotPictureInput], { nullable: true }),
    __metadata("design:type", Array)
], SpotInput.prototype, "pictures", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], SpotInput.prototype, "tags", void 0);
exports.SpotInput = SpotInput = __decorate([
    (0, graphql_1.InputType)()
], SpotInput);
//# sourceMappingURL=spot-input.js.map