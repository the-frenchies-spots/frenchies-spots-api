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
exports.FavoriteBusiness = void 0;
const common_1 = require("@nestjs/common");
const error_service_1 = require("../service/error.service");
const code_errors_enum_1 = require("../enum/code-errors.enum");
const spot_repository_1 = require("../repository/spot.repository");
const favorite_repository_1 = require("../repository/favorite.repository");
const { ACCESS_DENIED, SPOT_ID_MATCH_PROFILE_ID, SPOT_NOT_FOUND, INTERNAL_SERVER_ERROR, } = code_errors_enum_1.codeErrors;
let FavoriteBusiness = class FavoriteBusiness {
    constructor(favoriteRepository, spotRepository) {
        this.favoriteRepository = favoriteRepository;
        this.spotRepository = spotRepository;
    }
    async getAllByProfileId(profileId) {
        const { favorites } = await this.favoriteRepository.getProfileFavorites(profileId);
        return favorites?.map(({ spot }) => spot);
    }
    async createOrDelete(favoriteInput, profileId) {
        const { spotId, favoriteId } = favoriteInput;
        const spot = await this.spotRepository.getById(spotId);
        if (!spot)
            throw new error_service_1.default(SPOT_NOT_FOUND, spotId);
        if (profileId === spot.profileId)
            throw new error_service_1.default(SPOT_ID_MATCH_PROFILE_ID);
        if (!favoriteId) {
            const favorite = await this.favoriteRepository.create(spotId, profileId);
            if (!favorite)
                throw new error_service_1.default(INTERNAL_SERVER_ERROR);
            return {
                isFavorite: true,
                favoriteId: favorite.id,
            };
        }
        const favorite = await this.favoriteRepository.getById(favoriteId);
        if (profileId === favorite?.profileId) {
            const validated = await this.favoriteRepository.delete(spotId, favoriteId);
            return { isFavorite: !validated };
        }
        throw new error_service_1.default(ACCESS_DENIED);
    }
};
exports.FavoriteBusiness = FavoriteBusiness;
exports.FavoriteBusiness = FavoriteBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [favorite_repository_1.FavoriteRepository,
        spot_repository_1.SpotRepository])
], FavoriteBusiness);
//# sourceMappingURL=favorite.business.js.map