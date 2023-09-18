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
exports.ChatEntity = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_chat_entity_1 = require("./profile-chat.entity");
const chat_message_entity_1 = require("./chat-message.entity");
const typeorm_1 = require("typeorm");
let ChatEntity = class ChatEntity {
};
exports.ChatEntity = ChatEntity;
__decorate([
    (0, graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ChatEntity.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => [profile_chat_entity_1.ProfileChatEntity]),
    __metadata("design:type", Array)
], ChatEntity.prototype, "participants", void 0);
__decorate([
    (0, graphql_1.Field)(() => [chat_message_entity_1.ChatMessageEntity]),
    __metadata("design:type", Array)
], ChatEntity.prototype, "chatMessages", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ChatEntity.prototype, "isTemporary", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ChatEntity.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], ChatEntity.prototype, "updatedAt", void 0);
exports.ChatEntity = ChatEntity = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)('Chat')
], ChatEntity);
//# sourceMappingURL=chat.entity.js.map