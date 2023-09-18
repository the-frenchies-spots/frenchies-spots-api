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
exports.ProfileEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const spot_entity_1 = require("./spot.entity");
const rating_entity_1 = require("./rating.entity");
const favorite_entity_1 = require("./favorite.entity");
const contact_entity_1 = require("./contact.entity");
const profile_chat_entity_1 = require("./profile-chat.entity");
const graphql_type_json_1 = require("graphql-type-json");
const location_entity_1 = require("./location.entity");
let ProfileEntity = class ProfileEntity {
};
exports.ProfileEntity = ProfileEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProfileEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "pseudo", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "photoUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ProfileEntity.prototype, "avatarUrl", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ProfileEntity.prototype, "gamePoint", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProfileEntity.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_entity_1.UserEntity),
    (0, typeorm_1.ManyToOne)(() => user_entity_1.UserEntity, (user) => user.profile),
    __metadata("design:type", user_entity_1.UserEntity)
], ProfileEntity.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [spot_entity_1.SpotEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => spot_entity_1.SpotEntity, (spot) => spot.profile, { cascade: true }),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "spots", void 0);
__decorate([
    (0, graphql_1.Field)(() => [rating_entity_1.RatingEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => rating_entity_1.RatingEntity, (rating) => rating.profile, { cascade: true }),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "ratings", void 0);
__decorate([
    (0, graphql_1.Field)(() => [favorite_entity_1.FavoriteEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => favorite_entity_1.FavoriteEntity, (favorite) => favorite.profile, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "favorites", void 0);
__decorate([
    (0, graphql_1.Field)(() => [contact_entity_1.ContactEntity]),
    (0, typeorm_1.OneToMany)(() => contact_entity_1.ContactEntity, (contact) => contact.profile, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "contacts", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_chat_entity_1.ProfileChatEntity], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => profile_chat_entity_1.ProfileChatEntity, (profileChat) => profileChat.profile, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], ProfileEntity.prototype, "profileChats", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_type_json_1.default, { nullable: true }),
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", location_entity_1.LocationEntity)
], ProfileEntity.prototype, "location", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.Column)({ default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ProfileEntity.prototype, "updatedAt", void 0);
exports.ProfileEntity = ProfileEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('Profile')
], ProfileEntity);
//# sourceMappingURL=profile.entity.js.map