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
exports.SpotRepository = void 0;
const common_1 = require("@nestjs/common");
const spotByIdResponse_1 = require("../dto/spotByIdResponse");
const spot_entity_1 = require("../entity/spot.entity");
const prisma_service_1 = require("../service/prisma.service");
const plain_to_class_1 = require("../utils/plain-to-class");
let SpotRepository = class SpotRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id, profileId) {
        const spot = await this.prisma.spot.findUnique({
            where: {
                id,
            },
            include: {
                profile: true,
                spotPicture: true,
                tags: { include: { tag: true } },
                _count: {
                    select: { ratings: true },
                },
                ...(profileId
                    ? {
                        ratings: {
                            where: {
                                profileId,
                            },
                        },
                        favorites: {
                            where: {
                                profileId,
                            },
                        },
                    }
                    : {}),
            },
        });
        const spotByIdResponse = {
            ...spot,
            rating: {
                currentRating: spot?.ratings?.length ? spot.ratings[0] : null,
                maxVote: spot?._count?.ratings,
                avg: spot?.averageRating,
            },
        };
        return (0, plain_to_class_1.plainToClass)(spotByIdResponse, spotByIdResponse_1.SpotByIdResponse);
    }
    async getAll(spotsInput, ids, profileId) {
        const { orderBy = 'asc', searchValue = '', tagListId = [], take = 10, skip = 0, ...filterData } = spotsInput;
        const spotList = await this.prisma.spot.findMany({
            orderBy: {
                averageRating: orderBy,
            },
            where: {
                ...filterData,
                id: {
                    in: ids,
                },
                name: {
                    contains: searchValue,
                },
                ...(tagListId && tagListId.length
                    ? {
                        tags: {
                            some: {
                                OR: tagListId.map((tagId) => {
                                    return {
                                        tag: {
                                            id: tagId,
                                        },
                                    };
                                }),
                            },
                        },
                    }
                    : {}),
            },
            take,
            skip,
            include: {
                spotPicture: true,
                tags: {
                    include: {
                        tag: true,
                    },
                },
                favorites: {
                    where: {
                        profileId,
                    },
                },
            },
        });
        return (0, plain_to_class_1.plainToClassMany)(spotList, spot_entity_1.SpotEntity);
    }
    async create(insertSpotInput, profileId) {
        const { tags, pictures, ...values } = insertSpotInput;
        const spot = await this.prisma.spot.create({
            data: {
                ...values,
                tags: {
                    create: tags.map((tagId) => {
                        return {
                            tag: {
                                connect: { id: tagId },
                            },
                        };
                    }),
                },
                profile: {
                    connect: { id: profileId },
                },
                spotPicture: {
                    create: [...pictures],
                },
            },
            include: { spotPicture: true, tags: { include: { tag: true } } },
        });
        return (0, plain_to_class_1.plainToClass)(spot, spot_entity_1.SpotEntity);
    }
    async update(updateSpotInput) {
        const { id: spotId, tags, pictures, ...values } = updateSpotInput;
        const spot = await this.prisma.spot.update({
            where: {
                id: spotId,
            },
            data: {
                ...values,
                tags: {
                    deleteMany: {},
                    create: tags?.map((tagId) => {
                        return {
                            tag: {
                                connect: { id: tagId },
                            },
                        };
                    }),
                },
                spotPicture: {
                    deleteMany: {},
                    create: [...pictures],
                },
            },
            include: { spotPicture: true, tags: { include: { tag: true } } },
        });
        return (0, plain_to_class_1.plainToClass)(spot, spot_entity_1.SpotEntity);
    }
    async delete(spotId, profileId) {
        return this.prisma.profile
            .update({
            where: {
                id: profileId,
            },
            data: {
                spots: {
                    delete: {
                        id: spotId,
                    },
                },
            },
        })
            .then(() => true)
            .catch(() => false);
    }
    async updateAverageRatingBySpotId(spotId, avg) {
        return this.prisma.spot
            .update({
            where: {
                id: spotId,
            },
            data: {
                averageRating: avg,
            },
        })
            .then(() => true)
            .catch(() => false);
    }
};
exports.SpotRepository = SpotRepository;
exports.SpotRepository = SpotRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SpotRepository);
//# sourceMappingURL=spot.repository.js.map