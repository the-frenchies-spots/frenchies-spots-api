"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const token_service_1 = require("../service/token.service");
const prisma_service_1 = require("../service/prisma.service");
const stripe_service_1 = require("../service/stripe.service");
const publicToken_guard_1 = require("../guard/publicToken.guard");
const profile_resolver_1 = require("../resolver/profile.resolver");
const auth_repository_1 = require("../repository/auth.repository");
const profile_business_1 = require("../business/profile.business");
const profile_repository_1 = require("../repository/profile.repository");
const publicToken_strategy_1 = require("../strategy/publicToken.strategy");
const refreshToken_strategy_1 = require("../strategy/refreshToken.strategy");
const spot_geospatial_service_1 = require("../service/spot-geospatial.service");
const mongoose_1 = require("@nestjs/mongoose");
const spot_shema_1 = require("../schema/spot.shema");
const profile_shema_1 = require("../schema/profile.shema");
let ProfileModule = class ProfileModule {
};
exports.ProfileModule = ProfileModule;
exports.ProfileModule = ProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Spot', schema: spot_shema_1.SpotSchema },
                { name: 'Profile', schema: profile_shema_1.ProfileSchema },
            ]),
        ],
        providers: [
            profile_resolver_1.ProfileResolver,
            profile_repository_1.ProfileRepository,
            profile_business_1.ProfileBusiness,
            auth_repository_1.AuthRepository,
            jwt_1.JwtService,
            token_service_1.TokenService,
            stripe_service_1.StripeService,
            prisma_service_1.PrismaService,
            publicToken_guard_1.PublicTokenGuard,
            publicToken_strategy_1.PublicTokenStrategy,
            refreshToken_strategy_1.RefreshTokenStrategy,
            spot_geospatial_service_1.GeospatialService,
        ],
    })
], ProfileModule);
//# sourceMappingURL=profile.module.js.map