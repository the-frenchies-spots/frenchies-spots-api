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
exports.ContactEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_entity_1 = require("./profile.entity");
const typeorm_1 = require("typeorm");
let ContactEntity = class ContactEntity {
};
exports.ContactEntity = ContactEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ContactEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_entity_1.ProfileEntity),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], ContactEntity.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContactEntity.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ContactEntity.prototype, "authorization", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ContactEntity.prototype, "isFriend", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_entity_1.ProfileEntity),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], ContactEntity.prototype, "contact", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ContactEntity.prototype, "contactId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ContactEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ContactEntity.prototype, "updatedAt", void 0);
exports.ContactEntity = ContactEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('Contact')
], ContactEntity);
//# sourceMappingURL=contact.entity.js.map