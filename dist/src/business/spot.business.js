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
exports.SpotBusiness = void 0;
const common_1 = require("@nestjs/common");
const error_service_1 = require("../service/error.service");
const code_errors_enum_1 = require("../enum/code-errors.enum");
const spot_repository_1 = require("../repository/spot.repository");
const spot_geospatial_service_1 = require("../service/spot-geospatial.service");
const { SPOT_NOT_FOUND, SPOT_ID_NOT_MATCH_PROFILE_ID } = code_errors_enum_1.codeErrors;
let SpotBusiness = class SpotBusiness {
    constructor(spotRepository, geoService) {
        this.spotRepository = spotRepository;
        this.geoService = geoService;
    }
    async getById(id, profileId) {
        return this.spotRepository.getById(id, profileId);
    }
    async getAll(spotsInput, profileId) {
        const { point, ...fields } = spotsInput;
        if (point) {
            return this.geoService.searchArround(point).then((spotAround) => {
                const ids = spotAround.length
                    ? spotAround.map((spot) => spot._id)
                    : undefined;
                if (ids?.length) {
                    return this.spotRepository.getAll(fields, ids, profileId);
                }
                return [];
            });
        }
        return this.spotRepository.getAll(fields, undefined, profileId);
    }
    async insert(insertSpotInput, profileId) {
        return await this.spotRepository.create(insertSpotInput, profileId);
    }
    async update(updateSpotInput, profileId) {
        this.checkUserIsOwner(updateSpotInput.id, profileId);
        return await this.spotRepository.update(updateSpotInput);
    }
    async checkUserIsOwner(spotId, currentProfileId) {
        const spot = await this.spotRepository.getById(spotId);
        if (!spot)
            throw new error_service_1.default(SPOT_NOT_FOUND, spotId);
        if (currentProfileId !== spot.profileId)
            throw new error_service_1.default(SPOT_ID_NOT_MATCH_PROFILE_ID);
    }
    async delete(id, profileId) {
        const deleted = await this.spotRepository.delete(id, profileId);
        return { deleted };
    }
};
exports.SpotBusiness = SpotBusiness;
exports.SpotBusiness = SpotBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [spot_repository_1.SpotRepository,
        spot_geospatial_service_1.GeospatialService])
], SpotBusiness);
//# sourceMappingURL=spot.business.js.map