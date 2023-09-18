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
exports.RatingEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
const spot_entity_1 = require("./spot.entity");
let RatingEntity = class RatingEntity {
};
exports.RatingEntity = RatingEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RatingEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RatingEntity.prototype, "rate", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_entity_1.ProfileEntity),
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.ProfileEntity, (profile) => profile.ratings, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], RatingEntity.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RatingEntity.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => spot_entity_1.SpotEntity),
    (0, typeorm_1.ManyToOne)(() => spot_entity_1.SpotEntity, (spot) => spot.ratings, { onDelete: 'CASCADE' }),
    __metadata("design:type", spot_entity_1.SpotEntity)
], RatingEntity.prototype, "spot", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RatingEntity.prototype, "spotId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], RatingEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], RatingEntity.prototype, "updatedAt", void 0);
exports.RatingEntity = RatingEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('Rating')
], RatingEntity);
//# sourceMappingURL=rating.entity.js.map