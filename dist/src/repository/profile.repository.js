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
exports.ProfileRepository = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const plain_to_class_1 = require("../utils/plain-to-class");
const prisma_service_1 = require("../service/prisma.service");
const profile_entity_1 = require("../entity/profile.entity");
let ProfileRepository = class ProfileRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(profileId, ids) {
        const profiles = await this.prisma.profile.findMany({
            where: {
                id: {
                    in: ids,
                },
            },
            ...(profileId
                ? {
                    include: {
                        profileChats: {
                            include: {
                                chat: {
                                    include: {
                                        participants: {
                                            where: {
                                                profileId,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                }
                : {}),
        });
        return (0, plain_to_class_1.plainToClassMany)(profiles, profile_entity_1.ProfileEntity);
    }
    async update(profileInput, userId) {
        const user = await this.prisma.user.update({
            where: { id: userId },
            data: { profile: { update: profileInput } },
            include: { profile: true },
        });
        return (0, plain_to_class_1.plainToClass)(user, user_entity_1.UserEntity);
    }
};
exports.ProfileRepository = ProfileRepository;
exports.ProfileRepository = ProfileRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProfileRepository);
//# sourceMappingURL=profile.repository.js.map