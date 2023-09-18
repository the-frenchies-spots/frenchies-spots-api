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
exports.NotificationResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const currentProfileId_decorator_1 = require("../decorator/currentProfileId.decorator.");
const notification_entity_1 = require("../entity/notification.entity");
const notification_business_1 = require("../business/notification.business");
let NotificationResolver = class NotificationResolver {
    constructor(notifBusiness) {
        this.notifBusiness = notifBusiness;
    }
    notifications(profileId) {
        return this.notifBusiness.getAll(profileId);
    }
    updateNotifStatus(profileId) {
        return this.notifBusiness.updateNotifStatus(profileId);
    }
};
exports.NotificationResolver = NotificationResolver;
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Query)(() => [notification_entity_1.NotificationEntity]),
    __param(0, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "notifications", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => [Boolean]),
    __param(0, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NotificationResolver.prototype, "updateNotifStatus", null);
exports.NotificationResolver = NotificationResolver = __decorate([
    (0, graphql_1.Resolver)(() => notification_entity_1.NotificationEntity),
    __metadata("design:paramtypes", [notification_business_1.NotificationBusiness])
], NotificationResolver);
//# sourceMappingURL=notification.resolver.js.map