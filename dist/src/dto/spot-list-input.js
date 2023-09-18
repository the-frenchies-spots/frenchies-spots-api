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
exports.SpotListInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
const order_by_enum_1 = require("./order-by.enum");
const spot_entity_1 = require("../entity/spot.entity");
let SpotListInput = class SpotListInput extends spot_entity_1.SpotEntity {
};
exports.SpotListInput = SpotListInput;
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SpotListInput.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], SpotListInput.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], SpotListInput.prototype, "tagListId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], SpotListInput.prototype, "searchValue", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(order_by_enum_1.OrderByEnum),
    __metadata("design:type", String)
], SpotListInput.prototype, "orderBy", void 0);
exports.SpotListInput = SpotListInput = __decorate([
    (0, graphql_1.InputType)()
], SpotListInput);
//# sourceMappingURL=spot-list-input.js.map