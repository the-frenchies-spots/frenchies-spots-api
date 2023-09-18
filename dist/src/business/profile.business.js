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
exports.ProfileBusiness = void 0;
const common_1 = require("@nestjs/common");
const error_service_1 = require("../service/error.service");
const code_errors_enum_1 = require("../enum/code-errors.enum");
const stripe_service_1 = require("../service/stripe.service");
const auth_repository_1 = require("../repository/auth.repository");
const profile_repository_1 = require("../repository/profile.repository");
const spot_geospatial_service_1 = require("../service/spot-geospatial.service");
const { INTERNAL_SERVER_ERROR, USER_NOT_FOUND } = code_errors_enum_1.codeErrors;
let ProfileBusiness = class ProfileBusiness {
    constructor(profileRepository, stripeService, authRepository, geoService) {
        this.profileRepository = profileRepository;
        this.stripeService = stripeService;
        this.authRepository = authRepository;
        this.geoService = geoService;
    }
    async getAll(profilesInput, profileId) {
        const { point } = profilesInput;
        if (point) {
            return this.geoService.searchPeopleArround(point).then((profiles) => {
                const ids = profiles?.length
                    ? profiles.map((profile) => profile._doc._id)
                    : [];
                if (ids?.length) {
                    return this.profileRepository.getAll(profileId, ids);
                }
                return [];
            });
        }
        return this.profileRepository.getAll(profileId);
    }
    async getUserOrThrow(userId) {
        const user = await this.authRepository.getOneById(userId);
        if (!user) {
            throw new error_service_1.default(USER_NOT_FOUND);
        }
        return user;
    }
    async buyPoint(buyPoint, userId) {
        const { amount, paymentId } = buyPoint;
        const { success } = await this.stripeService.charge(amount, paymentId);
        if (success) {
            const user = await this.getUserOrThrow(userId);
            const userPoint = user?.profile?.gamePoint || 0;
            return this.profileRepository.update({ gamePoint: userPoint + amount }, userId);
        }
        throw new error_service_1.default(INTERNAL_SERVER_ERROR);
    }
    async updateProfile(profileInput, userId) {
        await this.getUserOrThrow(userId);
        return this.profileRepository.update(profileInput, userId);
    }
};
exports.ProfileBusiness = ProfileBusiness;
exports.ProfileBusiness = ProfileBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [profile_repository_1.ProfileRepository,
        stripe_service_1.StripeService,
        auth_repository_1.AuthRepository,
        spot_geospatial_service_1.GeospatialService])
], ProfileBusiness);
//# sourceMappingURL=profile.business.js.map