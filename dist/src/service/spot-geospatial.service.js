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
exports.GeospatialService = void 0;
const mongoose = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let GeospatialService = class GeospatialService {
    constructor(spotModel, profileModel) {
        this.spotModel = spotModel;
        this.profileModel = profileModel;
    }
    async searchPeopleArround(point) {
        const { coordinates, maxDistance } = point;
        return this.profileModel.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates,
                    },
                    $maxDistance: maxDistance,
                },
            },
        });
    }
    async searchArround(point) {
        const { coordinates, maxDistance } = point;
        return this.spotModel.find({
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates,
                    },
                    $maxDistance: maxDistance,
                },
            },
        });
    }
};
exports.GeospatialService = GeospatialService;
exports.GeospatialService = GeospatialService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Spot')),
    __param(1, (0, mongoose_1.InjectModel)('Profile')),
    __metadata("design:paramtypes", [mongoose.Model, mongoose.Model])
], GeospatialService);
//# sourceMappingURL=spot-geospatial.service.js.map