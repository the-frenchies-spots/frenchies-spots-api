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
exports.TagRepository = void 0;
const common_1 = require("@nestjs/common");
const tag_entity_1 = require("../entity/tag.entity");
const prisma_service_1 = require("../service/prisma.service");
const plain_to_class_1 = require("../utils/plain-to-class");
let TagRepository = class TagRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(filterData) {
        const { searchValue = '' } = filterData;
        const tags = await this.prisma.tag.findMany({
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
        return (0, plain_to_class_1.plainToClassMany)(tags, tag_entity_1.TagEntity);
    }
    async getById(id) {
        const tag = await this.prisma.tag.findUnique({ where: { id } });
        return (0, plain_to_class_1.plainToClass)(tag, tag_entity_1.TagEntity);
    }
    async create(data) {
        const tag = await this.prisma.tag.create({ data });
        return (0, plain_to_class_1.plainToClass)(tag, tag_entity_1.TagEntity);
    }
    async update(data) {
        const { id, tagPictureUrl } = data;
        const tag = await this.prisma.tag.update({
            where: { id },
            data: { tagPictureUrl },
        });
        return (0, plain_to_class_1.plainToClass)(tag, tag_entity_1.TagEntity);
    }
    async delete(id) {
        return this.prisma.tag
            .delete({ where: { id } })
            .then(() => true)
            .catch(() => false);
    }
};
exports.TagRepository = TagRepository;
exports.TagRepository = TagRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TagRepository);
//# sourceMappingURL=tag.repository.js.map