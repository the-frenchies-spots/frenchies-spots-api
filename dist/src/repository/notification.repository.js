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
exports.NotificationRepository = void 0;
const common_1 = require("@nestjs/common");
const plain_to_class_1 = require("../utils/plain-to-class");
const prisma_service_1 = require("../service/prisma.service");
const notification_entity_1 = require("../entity/notification.entity");
let NotificationRepository = class NotificationRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(profileId) {
        const notifs = await this.prisma.notification.findMany({
            where: { profileId },
        });
        return (0, plain_to_class_1.plainToClassMany)(notifs, notification_entity_1.NotificationEntity);
    }
    async sendNotif(sendNotifInput) {
        const notif = await this.prisma.notification.create({
            data: sendNotifInput,
        });
        return (0, plain_to_class_1.plainToClass)(notif, notification_entity_1.NotificationEntity);
    }
    async updateNotifStatus(profileId) {
        return this.prisma.notification
            .updateMany({
            where: { profileId },
            data: { isRead: true },
        })
            .then(() => true)
            .catch((err) => {
            console.log(err);
            return false;
        });
    }
};
exports.NotificationRepository = NotificationRepository;
exports.NotificationRepository = NotificationRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationRepository);
//# sourceMappingURL=notification.repository.js.map