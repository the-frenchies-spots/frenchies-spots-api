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
exports.NotificationBusiness = void 0;
const common_1 = require("@nestjs/common");
const notification_repository_1 = require("../repository/notification.repository");
let NotificationBusiness = class NotificationBusiness {
    constructor(notificationRepository) {
        this.notificationRepository = notificationRepository;
    }
    async getAll(profileId) {
        return this.notificationRepository.getAll(profileId);
    }
    async sendNotif(sendNotifInput) {
        return this.notificationRepository.sendNotif(sendNotifInput);
    }
    async updateNotifStatus(profileId) {
        return this.notificationRepository.updateNotifStatus(profileId);
    }
};
exports.NotificationBusiness = NotificationBusiness;
exports.NotificationBusiness = NotificationBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notification_repository_1.NotificationRepository])
], NotificationBusiness);
//# sourceMappingURL=notification.business.js.map