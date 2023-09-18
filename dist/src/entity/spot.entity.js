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
exports.SpotEntity = void 0;
const client_1 = require("@prisma/client");
const graphql_1 = require("@nestjs/graphql");
const graphql_type_json_1 = require("graphql-type-json");
const typeorm_1 = require("typeorm");
const rating_entity_1 = require("./rating.entity");
const profile_entity_1 = require("./profile.entity");
const favorite_entity_1 = require("./favorite.entity");
const spot_picture_entity_1 = require("./spot-picture.entity");
const tag_on_spot_entity_1 = require("./tag-on-spot.entity");
const location_entity_1 = require("./location.entity");
let SpotEntity = class SpotEntity {
};
exports.SpotEntity = SpotEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], SpotEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotEntity.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotEntity.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SpotEntity.prototype, "isCanPark", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], SpotEntity.prototype, "isHidden", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: 'enum', enum: client_1.CategoriesSpotAndTag }),
    __metadata("design:type", String)
], SpotEntity.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_entity_1.ProfileEntity),
    (0, typeorm_1.ManyToOne)(() => profile_entity_1.ProfileEntity, (profile) => profile.spots),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], SpotEntity.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotEntity.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.default, { nullable: true }),
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", location_entity_1.LocationEntity)
], SpotEntity.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotEntity.prototype, "region", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SpotEntity.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], SpotEntity.prototype, "averageRating", void 0);
__decorate([
    (0, graphql_1.Field)(() => [spot_picture_entity_1.SpotPictureEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => spot_picture_entity_1.SpotPictureEntity, (spotPicture) => spotPicture.spot, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], SpotEntity.prototype, "spotPicture", void 0);
__decorate([
    (0, graphql_1.Field)(() => [rating_entity_1.RatingEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => rating_entity_1.RatingEntity, (rating) => rating.spot, { cascade: true }),
    __metadata("design:type", Array)
], SpotEntity.prototype, "ratings", void 0);
__decorate([
    (0, graphql_1.Field)(() => [favorite_entity_1.FavoriteEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.FavoriteEntity, (favorite) => favorite.spot, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], SpotEntity.prototype, "favorites", void 0);
__decorate([
    (0, graphql_1.Field)(() => [tag_on_spot_entity_1.TagOnSpotEntity], { nullable: true }),
    (0, typeorm_1.ManyToMany)(() => tag_on_spot_entity_1.TagOnSpotEntity, (tagEl) => tagEl.tag.spots),
    __metadata("design:type", Array)
], SpotEntity.prototype, "tags", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], SpotEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], SpotEntity.prototype, "updatedAt", void 0);
exports.SpotEntity = SpotEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('Spot')
], SpotEntity);
//# sourceMappingURL=spot.entity.js.map