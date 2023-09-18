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
exports.ChatMessageEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const chat_entity_1 = require("./chat.entity");
const profile_chat_entity_1 = require("./profile-chat.entity");
const typeorm_1 = require("typeorm");
let ChatMessageEntity = class ChatMessageEntity {
};
exports.ChatMessageEntity = ChatMessageEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ChatMessageEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => chat_entity_1.ChatEntity),
    __metadata("design:type", chat_entity_1.ChatEntity)
], ChatMessageEntity.prototype, "chat", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChatMessageEntity.prototype, "chatId", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_chat_entity_1.ProfileChatEntity),
    __metadata("design:type", profile_chat_entity_1.ProfileChatEntity)
], ChatMessageEntity.prototype, "profileChat", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChatMessageEntity.prototype, "profileChatId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ChatMessageEntity.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ChatMessageEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ChatMessageEntity.prototype, "updatedAt", void 0);
exports.ChatMessageEntity = ChatMessageEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('ChatMessage')
], ChatMessageEntity);
//# sourceMappingURL=chat-message.entity.js.map