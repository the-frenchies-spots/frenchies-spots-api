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
exports.RatingBusiness = void 0;
const common_1 = require("@nestjs/common");
const error_service_1 = require("../service/error.service");
const code_errors_enum_1 = require("../enum/code-errors.enum");
const rating_repository_1 = require("../repository/rating.repository");
const spot_repository_1 = require("../repository/spot.repository");
const { RATING_OUT_OF_RANGE, SPOT_ID_MATCH_PROFILE_ID, SPOT_NOT_FOUND, INTERNAL_SERVER_ERROR, } = code_errors_enum_1.codeErrors;
let RatingBusiness = class RatingBusiness {
    constructor(ratingRepository, spotRepository) {
        this.ratingRepository = ratingRepository;
        this.spotRepository = spotRepository;
    }
    async createOrUpdate(ratingInput, profileId) {
        const { rate, spotId } = ratingInput;
        if (rate < 0 || rate > 5)
            throw new error_service_1.default(RATING_OUT_OF_RANGE);
        const spot = await this.spotRepository.getById(spotId);
        if (!spot)
            throw new error_service_1.default(SPOT_NOT_FOUND, spotId);
        if (profileId === spot.profileId)
            throw new error_service_1.default(SPOT_ID_MATCH_PROFILE_ID);
        const userRating = await this.ratingRepository.createOrUpdate(ratingInput, profileId);
        const average = await this.ratingRepository.getSpotAverageRating(spotId);
        const newAverage = average._avg.rate || 0;
        const maxVote = average._count.rate;
        const spotUpdated = await this.spotRepository.updateAverageRatingBySpotId(spotId, newAverage);
        if (!spotUpdated)
            throw new error_service_1.default(INTERNAL_SERVER_ERROR);
        return { currentRating: userRating, avg: newAverage, maxVote };
    }
};
exports.RatingBusiness = RatingBusiness;
exports.RatingBusiness = RatingBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [rating_repository_1.RatingRepository,
        spot_repository_1.SpotRepository])
], RatingBusiness);
//# sourceMappingURL=rating.business.js.map