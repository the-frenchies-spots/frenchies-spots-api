"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../service/prisma.service");
const token_service_1 = require("../service/token.service");
const auth_resolver_1 = require("../resolver/auth.resolver");
const auth_business_1 = require("../business/auth.business");
const auth_repository_1 = require("../repository/auth.repository");
const publicToken_strategy_1 = require("../strategy/publicToken.strategy");
const refreshToken_strategy_1 = require("../strategy/refreshToken.strategy");
const publicToken_guard_1 = require("../guard/publicToken.guard");
const passport_1 = require("@nestjs/passport");
const config_1 = require("@nestjs/config");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt-refresh' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('REFRESH_TOKEN_SECRET'),
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [
            auth_resolver_1.AuthResolver,
            auth_business_1.AuthBusiness,
            auth_repository_1.AuthRepository,
            jwt_1.JwtService,
            token_service_1.TokenService,
            prisma_service_1.PrismaService,
            publicToken_strategy_1.PublicTokenStrategy,
            refreshToken_strategy_1.RefreshTokenStrategy,
            publicToken_guard_1.PublicTokenGuard,
            refreshToken_guard_1.RefreshTokenGuard,
        ],
        exports: [
            publicToken_guard_1.PublicTokenGuard,
            refreshToken_guard_1.RefreshTokenGuard,
            publicToken_strategy_1.PublicTokenStrategy,
            refreshToken_strategy_1.RefreshTokenStrategy,
        ],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map