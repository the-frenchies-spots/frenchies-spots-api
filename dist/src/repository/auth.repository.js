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
exports.AuthRepository = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const prisma_service_1 = require("../service/prisma.service");
const plain_to_class_1 = require("../utils/plain-to-class");
let AuthRepository = class AuthRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOneByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
            include: { profile: true },
        });
        return (0, plain_to_class_1.plainToClass)(user, user_entity_1.UserEntity);
    }
    async getOneById(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { profile: { include: { contacts: true } } },
        });
        return (0, plain_to_class_1.plainToClass)(user, user_entity_1.UserEntity);
    }
    async create(pseudo, hashedPassword, email) {
        const user = await this.prisma.user.create({
            data: {
                hashedPassword,
                email,
                profile: { create: { pseudo, location: null } },
            },
            include: { profile: true },
        });
        return (0, plain_to_class_1.plainToClass)(user, user_entity_1.UserEntity);
    }
    async updateRefreshToken(userId, hashedRefreshToken) {
        const user = await this.prisma.user.update({
            where: { id: userId },
            data: { hashedRefreshToken },
            include: { profile: true },
        });
        return (0, plain_to_class_1.plainToClass)(user, user_entity_1.UserEntity);
    }
    async disconnect(userId) {
        return this.prisma.user
            .updateMany({
            where: { id: userId, hashedRefreshToken: { not: null } },
            data: { hashedRefreshToken: null },
        })
            .then(() => true)
            .catch(() => false);
    }
};
exports.AuthRepository = AuthRepository;
exports.AuthRepository = AuthRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthRepository);
//# sourceMappingURL=auth.repository.js.map