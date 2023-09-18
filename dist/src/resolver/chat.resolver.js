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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const chat_business_1 = require("../business/chat.business");
const chat_entity_1 = require("../entity/chat.entity");
const currentProfileId_decorator_1 = require("../decorator/currentProfileId.decorator.");
const insert_chat_input_1 = require("../dto/input/chat/insert-chat.input");
const currentUserId_decorator_1 = require("../decorator/currentUserId.decorator");
let ChatResolver = class ChatResolver {
    constructor(chatBusiness) {
        this.chatBusiness = chatBusiness;
    }
    chats(userId) {
        return this.chatBusiness.chats(userId);
    }
    chatByPk(chatId, profileId) {
        return this.chatBusiness.getByPk(chatId, profileId);
    }
    insertChat(inserChatInput, profileId) {
        return this.chatBusiness.insertChat(profileId, inserChatInput);
    }
};
exports.ChatResolver = ChatResolver;
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Query)(() => [chat_entity_1.ChatEntity]),
    __param(0, (0, currentUserId_decorator_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "chats", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Query)(() => chat_entity_1.ChatEntity),
    __param(0, (0, graphql_1.Args)('chatId')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "chatByPk", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => chat_entity_1.ChatEntity),
    __param(0, (0, graphql_1.Args)('inserChatInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [insert_chat_input_1.InserChatInput, String]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "insertChat", null);
exports.ChatResolver = ChatResolver = __decorate([
    (0, graphql_1.Resolver)(() => chat_entity_1.ChatEntity),
    __metadata("design:paramtypes", [chat_business_1.ChatBusiness])
], ChatResolver);
//# sourceMappingURL=chat.resolver.js.map