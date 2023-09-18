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
exports.RatingRepository = void 0;
const mongodb_1 = require("mongodb");
const common_1 = require("@nestjs/common");
const rating_entity_1 = require("../entity/rating.entity");
const prisma_service_1 = require("../service/prisma.service");
const plain_to_class_1 = require("../utils/plain-to-class");
let RatingRepository = class RatingRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrUpdate(ratingInput, profileId) {
        const { rate, ratingId, spotId } = ratingInput;
        const rating = await this.prisma.rating.upsert({
            where: { id: ratingId || new mongodb_1.ObjectId().toString() },
            update: { rate, profileId },
            create: {
                rate,
                profileId,
                spotId,
            },
        });
        return (0, plain_to_class_1.plainToClass)(rating, rating_entity_1.RatingEntity);
    }
    async getSpotAverageRating(spotId) {
        const average = this.prisma.rating.aggregate({
            where: { spotId },
            _avg: {
                rate: true,
            },
            _count: {
                rate: true,
            },
        });
        return average;
    }
    async getAll(filterData) {
        const { searchValue = '' } = filterData;
        return this.prisma.tag.findMany({
            where: {
                category: filterData?.category,
                id: {
                    in: filterData?.ids,
                },
                name: {
                    contains: searchValue,
                },
            },
        });
    }
};
exports.RatingRepository = RatingRepository;
exports.RatingRepository = RatingRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RatingRepository);
//# sourceMappingURL=rating.repository.js.map