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
exports.PictureResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const contact_entity_1 = require("../entity/contact.entity");
const picture_entity_1 = require("../entity/picture.entity");
const picture_business_1 = require("../business/picture.business");
const picture_input_1 = require("../dto/input/picture/picture.input");
let PictureResolver = class PictureResolver {
    constructor(pictureBusiness) {
        this.pictureBusiness = pictureBusiness;
    }
    upload(pictureInput) {
        return this.pictureBusiness.upload(pictureInput);
    }
};
exports.PictureResolver = PictureResolver;
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => [picture_entity_1.PictureEntity]),
    __param(0, (0, graphql_1.Args)('pictureInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [picture_input_1.PictureInput]),
    __metadata("design:returntype", Promise)
], PictureResolver.prototype, "upload", null);
exports.PictureResolver = PictureResolver = __decorate([
    (0, graphql_1.Resolver)(() => contact_entity_1.ContactEntity),
    __metadata("design:paramtypes", [picture_business_1.PictureBusiness])
], PictureResolver);
//# sourceMappingURL=picture.resolver.js.map