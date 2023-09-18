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
exports.ProfileChatEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("./profile.entity");
const chat_entity_1 = require("./chat.entity");
const chat_message_entity_1 = require("./chat-message.entity");
let ProfileChatEntity = class ProfileChatEntity {
};
exports.ProfileChatEntity = ProfileChatEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ProfileChatEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_entity_1.ProfileEntity),
    __metadata("design:type", profile_entity_1.ProfileEntity)
], ProfileChatEntity.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ProfileChatEntity.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => chat_entity_1.ChatEntity),
    __metadata("design:type", chat_entity_1.ChatEntity)
], ProfileChatEntity.prototype, "chat", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ProfileChatEntity.prototype, "chatId", void 0);
__decorate([
    (0, graphql_1.Field)(() => [chat_message_entity_1.ChatMessageEntity]),
    __metadata("design:type", Array)
], ProfileChatEntity.prototype, "chatMessages", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ProfileChatEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ProfileChatEntity.prototype, "updatedAt", void 0);
exports.ProfileChatEntity = ProfileChatEntity = __decorate([
    (0, graphql_1.ObjectType)()
], ProfileChatEntity);
//# sourceMappingURL=profile-chat.entity.js.map