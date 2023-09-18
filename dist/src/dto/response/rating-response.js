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
exports.RatingResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const rating_entity_1 = require("../../entity/rating.entity");
let RatingResponse = class RatingResponse {
};
exports.RatingResponse = RatingResponse;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", rating_entity_1.RatingEntity)
], RatingResponse.prototype, "currentRating", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], RatingResponse.prototype, "avg", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], RatingResponse.prototype, "maxVote", void 0);
exports.RatingResponse = RatingResponse = __decorate([
    (0, graphql_1.ObjectType)()
], RatingResponse);
//# sourceMappingURL=rating-response.js.map