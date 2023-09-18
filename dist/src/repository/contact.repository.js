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
exports.ContactRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../service/prisma.service");
const contact_entity_1 = require("../entity/contact.entity");
const plain_to_class_1 = require("../utils/plain-to-class");
let ContactRepository = class ContactRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(profileId, contactsInput) {
        const contacts = await this.prisma.contact.findMany({
            where: {
                profileId,
                isFriend: contactsInput?.isFriend,
                authorization: contactsInput?.authorization,
            },
            include: { contact: true, profile: true },
        });
        console.log('==============================');
        console.log(contacts);
        console.log('==============================');
        return (0, plain_to_class_1.plainToClassMany)(contacts, contact_entity_1.ContactEntity);
    }
    async connectContacts(profileId, participantIds) {
        return this.prisma.profile
            .update({
            where: { id: profileId },
            data: {
                contacts: {
                    create: participantIds.map((id) => {
                        return {
                            contact: {
                                connect: { id },
                            },
                        };
                    }),
                },
            },
            include: { contacts: { include: { contact: true } } },
        })
            .then(() => true)
            .catch((err) => {
            console.log(err);
            return false;
        });
    }
};
exports.ContactRepository = ContactRepository;
exports.ContactRepository = ContactRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContactRepository);
//# sourceMappingURL=contact.repository.js.map