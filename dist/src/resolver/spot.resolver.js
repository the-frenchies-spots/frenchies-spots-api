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
exports.SpotResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const public_decorator_1 = require("../decorator/public.decorator");
const spot_entity_1 = require("../entity/spot.entity");
const spot_business_1 = require("./../business/spot.business");
const spot_input_1 = require("../dto/input/spot/spot-input");
const currentProfileId_decorator_1 = require("../decorator/currentProfileId.decorator.");
const common_1 = require("@nestjs/common");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const spots_input_1 = require("../dto/input/spot/spots-input");
const publicToken_guard_1 = require("../guard/publicToken.guard");
const delete_response_1 = require("../dto/response/delete.response");
const spotByIdResponse_1 = require("../dto/spotByIdResponse");
let SpotResolver = class SpotResolver {
    constructor(spotBusiness) {
        this.spotBusiness = spotBusiness;
    }
    spotByPk(id, profileId) {
        return this.spotBusiness.getById(id, profileId);
    }
    spots(spotsInput, profileId) {
        return this.spotBusiness.getAll(spotsInput, profileId);
    }
    insertSpot(insertSpotInput, profileId) {
        return this.spotBusiness.insert(insertSpotInput, profileId);
    }
    updateSpot(updateSpotInput, profileId) {
        return this.spotBusiness.update(updateSpotInput, profileId);
    }
    deleteSpot(id, profileId) {
        return this.spotBusiness.delete(id, profileId);
    }
};
exports.SpotResolver = SpotResolver;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Query)(() => spotByIdResponse_1.SpotByIdResponse),
    (0, common_1.UseGuards)(publicToken_guard_1.PublicTokenGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SpotResolver.prototype, "spotByPk", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Query)(() => [spot_entity_1.SpotEntity]),
    (0, common_1.UseGuards)(publicToken_guard_1.PublicTokenGuard),
    __param(0, (0, graphql_1.Args)('spotsInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spots_input_1.SpotsInput, String]),
    __metadata("design:returntype", Promise)
], SpotResolver.prototype, "spots", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => spot_entity_1.SpotEntity),
    __param(0, (0, graphql_1.Args)('insertSpotInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spot_input_1.SpotInput, String]),
    __metadata("design:returntype", Promise)
], SpotResolver.prototype, "insertSpot", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => spot_entity_1.SpotEntity),
    __param(0, (0, graphql_1.Args)('updateSpotInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spot_input_1.SpotInput, String]),
    __metadata("design:returntype", Promise)
], SpotResolver.prototype, "updateSpot", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => delete_response_1.DeleteResponse),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SpotResolver.prototype, "deleteSpot", null);
exports.SpotResolver = SpotResolver = __decorate([
    (0, graphql_1.Resolver)(() => spot_entity_1.SpotEntity),
    __metadata("design:paramtypes", [spot_business_1.SpotBusiness])
], SpotResolver);
//# sourceMappingURL=spot.resolver.js.map