"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("../service/token.service");
const prisma_service_1 = require("../service/prisma.service");
const publicToken_guard_1 = require("../guard/publicToken.guard");
const publicToken_strategy_1 = require("../strategy/publicToken.strategy");
const refreshToken_strategy_1 = require("../strategy/refreshToken.strategy");
const chat_business_1 = require("../business/chat.business");
const chat_resolver_1 = require("../resolver/chat.resolver");
const chat_repository_1 = require("../repository/chat.repository");
const socket_gateway_1 = require("../gateway/socket.gateway");
const contact_repository_1 = require("../repository/contact.repository");
const notification_business_1 = require("../business/notification.business");
const notification_repository_1 = require("../repository/notification.repository");
const notification_resolver_1 = require("../resolver/notification.resolver");
let SocketModule = class SocketModule {
};
exports.SocketModule = SocketModule;
exports.SocketModule = SocketModule = __decorate([
    (0, common_1.Module)({
        providers: [
            chat_resolver_1.ChatResolver,
            chat_business_1.ChatBusiness,
            chat_repository_1.ChatRepository,
            contact_repository_1.ContactRepository,
            notification_business_1.NotificationBusiness,
            notification_repository_1.NotificationRepository,
            notification_resolver_1.NotificationResolver,
            socket_gateway_1.SocketGateway,
            jwt_1.JwtService,
            token_service_1.TokenService,
            prisma_service_1.PrismaService,
            publicToken_guard_1.PublicTokenGuard,
            publicToken_strategy_1.PublicTokenStrategy,
            refreshToken_strategy_1.RefreshTokenStrategy,
        ],
    })
], SocketModule);
//# sourceMappingURL=socket.module.js.map