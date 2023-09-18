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
exports.FavoriteRepository = void 0;
const common_1 = require("@nestjs/common");
const plain_to_class_1 = require("../utils/plain-to-class");
const profile_entity_1 = require("../entity/profile.entity");
const prisma_service_1 = require("../service/prisma.service");
let FavoriteRepository = class FavoriteRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getProfileFavorites(profileId) {
        const profile = await this.prisma.profile.findUnique({
            where: {
                id: profileId,
            },
            include: {
                favorites: {
                    include: {
                        spot: {
                            include: { spotPicture: true, ratings: true, favorites: true },
                        },
                    },
                },
            },
        });
        return (0, plain_to_class_1.plainToClass)(profile, profile_entity_1.ProfileEntity);
    }
    async getById(id) {
        return this.prisma.favorite.findUnique({
            where: {
                id,
            },
        });
    }
    create(spotId, profileId) {
        return this.prisma.favorite.create({
            data: {
                profile: { connect: { id: profileId } },
                spot: { connect: { id: spotId } },
            },
        });
    }
    delete(spotId, favoriteId) {
        return this.prisma.spot
            .update({
            where: {
                id: spotId,
            },
            data: {
                favorites: {
                    delete: {
                        id: favoriteId,
                    },
                },
            },
            include: { favorites: true },
        })
            .then(() => true)
            .catch(() => false);
    }
};
exports.FavoriteRepository = FavoriteRepository;
exports.FavoriteRepository = FavoriteRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FavoriteRepository);
//# sourceMappingURL=favorite.repository.js.map