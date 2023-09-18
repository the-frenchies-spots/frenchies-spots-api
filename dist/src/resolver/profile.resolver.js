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
exports.ProfileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const public_decorator_1 = require("../decorator/public.decorator");
const profile_entity_1 = require("../entity/profile.entity");
const profile_business_1 = require("../business/profile.business");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const profile_input_1 = require("../dto/input/profile/profile.input");
const currentUserId_decorator_1 = require("../decorator/currentUserId.decorator");
const buy_point_input_1 = require("../dto/input/buy-point/buy-point-input");
const profiles_input_1 = require("../dto/input/profile/profiles.input");
const publicToken_guard_1 = require("../guard/publicToken.guard");
const currentProfileId_decorator_1 = require("../decorator/currentProfileId.decorator.");
let ProfileResolver = class ProfileResolver {
    constructor(profileBusiness) {
        this.profileBusiness = profileBusiness;
    }
    profiles(profilesInput, profileId) {
        return this.profileBusiness.getAll(profilesInput, profileId);
    }
    buyPoint(buyPoint, userId) {
        return this.profileBusiness.buyPoint(buyPoint, userId);
    }
    updateProfile(profileInput, userId) {
        return this.profileBusiness.updateProfile(profileInput, userId);
    }
};
exports.ProfileResolver = ProfileResolver;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Query)(() => [profile_entity_1.ProfileEntity]),
    (0, common_1.UseGuards)(publicToken_guard_1.PublicTokenGuard),
    __param(0, (0, graphql_1.Args)('profilesInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profiles_input_1.ProfilesInput, String]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "profiles", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => user_entity_1.UserEntity),
    __param(0, (0, graphql_1.Args)('buyPoint')),
    __param(1, (0, currentUserId_decorator_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [buy_point_input_1.BuyPointInput, String]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "buyPoint", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => user_entity_1.UserEntity),
    __param(0, (0, graphql_1.Args)('profileInput')),
    __param(1, (0, currentUserId_decorator_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [profile_input_1.ProfileInput, String]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "updateProfile", null);
exports.ProfileResolver = ProfileResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.UserEntity),
    __metadata("design:paramtypes", [profile_business_1.ProfileBusiness])
], ProfileResolver);
//# sourceMappingURL=profile.resolver.js.map