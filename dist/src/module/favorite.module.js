"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("../service/token.service");
const prisma_service_1 = require("../service/prisma.service");
const publicToken_guard_1 = require("../guard/publicToken.guard");
const spot_repository_1 = require("../repository/spot.repository");
const favorite_resolver_1 = require("../resolver/favorite.resolver");
const favorite_business_1 = require("../business/favorite.business");
const favorite_repository_1 = require("../repository/favorite.repository");
const publicToken_strategy_1 = require("../strategy/publicToken.strategy");
const refreshToken_strategy_1 = require("../strategy/refreshToken.strategy");
let FavoriteModule = class FavoriteModule {
};
exports.FavoriteModule = FavoriteModule;
exports.FavoriteModule = FavoriteModule = __decorate([
    (0, common_1.Module)({
        providers: [
            favorite_resolver_1.FavoriteResolver,
            favorite_business_1.FavoriteBusiness,
            favorite_repository_1.FavoriteRepository,
            spot_repository_1.SpotRepository,
            jwt_1.JwtService,
            token_service_1.TokenService,
            prisma_service_1.PrismaService,
            publicToken_guard_1.PublicTokenGuard,
            publicToken_strategy_1.PublicTokenStrategy,
            refreshToken_strategy_1.RefreshTokenStrategy,
        ],
    })
], FavoriteModule);
//# sourceMappingURL=favorite.module.js.map