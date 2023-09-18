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
exports.TagBusiness = void 0;
const common_1 = require("@nestjs/common");
const tag_repository_1 = require("../repository/tag.repository");
let TagBusiness = class TagBusiness {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async getAll(tagListInput) {
        return this.tagRepository.getAll(tagListInput);
    }
    async getById(id) {
        return this.tagRepository.getById(id);
    }
    async insert(tagInsertInput) {
        return this.tagRepository.create(tagInsertInput);
    }
    async update(tagUpdateInput) {
        return this.tagRepository.update(tagUpdateInput);
    }
    async delete(id) {
        const deleted = await this.tagRepository.delete(id);
        return { deleted };
    }
};
exports.TagBusiness = TagBusiness;
exports.TagBusiness = TagBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tag_repository_1.TagRepository])
], TagBusiness);
//# sourceMappingURL=tag.business.js.map