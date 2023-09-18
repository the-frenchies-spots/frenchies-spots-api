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
exports.FavoriteResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const favorite_entity_1 = require("../entity/favorite.entity");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const favorite_business_1 = require("../business/favorite.business");
const favorite_input_1 = require("../dto/input/favorite/favorite-input");
const currentProfileId_decorator_1 = require("../decorator/currentProfileId.decorator.");
const toggle_favorite_response_1 = require("../dto/response/toggle-favorite-response");
const spot_entity_1 = require("../entity/spot.entity");
let FavoriteResolver = class FavoriteResolver {
    constructor(favoriteBusiness) {
        this.favoriteBusiness = favoriteBusiness;
    }
    spotsFavorite(profileId) {
        return this.favoriteBusiness.getAllByProfileId(profileId);
    }
    toggleFavorite(favoriteInput, profileId) {
        return this.favoriteBusiness.createOrDelete(favoriteInput, profileId);
    }
};
exports.FavoriteResolver = FavoriteResolver;
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Query)(() => [spot_entity_1.SpotEntity]),
    __param(0, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FavoriteResolver.prototype, "spotsFavorite", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => toggle_favorite_response_1.ToggleFavoriteResponse),
    __param(0, (0, graphql_1.Args)('favoriteInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [favorite_input_1.FavoriteInput, String]),
    __metadata("design:returntype", Promise)
], FavoriteResolver.prototype, "toggleFavorite", null);
exports.FavoriteResolver = FavoriteResolver = __decorate([
    (0, graphql_1.Resolver)(() => favorite_entity_1.FavoriteEntity),
    __metadata("design:paramtypes", [favorite_business_1.FavoriteBusiness])
], FavoriteResolver);
//# sourceMappingURL=favorite.resolver.js.map