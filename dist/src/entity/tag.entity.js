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
exports.TagEntity = void 0;
const client_1 = require("@prisma/client");
const typeorm_1 = require("typeorm");
const graphql_1 = require("@nestjs/graphql");
const spot_entity_1 = require("./spot.entity");
let TagEntity = class TagEntity {
};
exports.TagEntity = TagEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TagEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TagEntity.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TagEntity.prototype, "tagPictureUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'enum', enum: client_1.CategoriesSpotAndTag }),
    __metadata("design:type", String)
], TagEntity.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => [spot_entity_1.SpotEntity], { nullable: true }),
    (0, typeorm_1.ManyToMany)(() => spot_entity_1.SpotEntity, (spot) => spot.tags),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], TagEntity.prototype, "spots", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TagEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TagEntity.prototype, "updatedAt", void 0);
exports.TagEntity = TagEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('Tag')
], TagEntity);
//# sourceMappingURL=tag.entity.js.map