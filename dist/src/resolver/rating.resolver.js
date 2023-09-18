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
exports.RatingResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const currentProfileId_decorator_1 = require("../decorator/currentProfileId.decorator.");
const common_1 = require("@nestjs/common");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const rating_input_1 = require("../dto/input/rating/rating-input");
const rating_business_1 = require("../business/rating.business");
const rating_response_1 = require("../dto/response/rating-response");
const rating_entity_1 = require("../entity/rating.entity");
let RatingResolver = class RatingResolver {
    constructor(ratingBusiness) {
        this.ratingBusiness = ratingBusiness;
    }
    createOrUpdateRating(ratingInput, profileId) {
        return this.ratingBusiness.createOrUpdate(ratingInput, profileId);
    }
};
exports.RatingResolver = RatingResolver;
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => rating_response_1.RatingResponse),
    __param(0, (0, graphql_1.Args)('ratingInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rating_input_1.RatingInput, String]),
    __metadata("design:returntype", Promise)
], RatingResolver.prototype, "createOrUpdateRating", null);
exports.RatingResolver = RatingResolver = __decorate([
    (0, graphql_1.Resolver)(() => rating_entity_1.RatingEntity),
    __metadata("design:paramtypes", [rating_business_1.RatingBusiness])
], RatingResolver);
//# sourceMappingURL=rating.resolver.js.map