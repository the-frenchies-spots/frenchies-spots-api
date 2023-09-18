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
exports.ChatRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../service/prisma.service");
const plain_to_class_1 = require("../utils/plain-to-class");
const chat_entity_1 = require("../entity/chat.entity");
const chat_message_entity_1 = require("../entity/chat-message.entity");
let ChatRepository = class ChatRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(userId) {
        const chat = await this.prisma.chat.findMany({
            where: {
                participants: {
                    some: {
                        profile: {
                            userId,
                        },
                    },
                },
            },
            include: {
                participants: { include: { profile: true } },
                chatMessages: true,
            },
        });
        return (0, plain_to_class_1.plainToClassMany)(chat, chat_entity_1.ChatEntity);
    }
    async getById(chatId) {
        const chat = await this.prisma.chat.findUnique({
            where: {
                id: chatId,
            },
            include: {
                participants: { include: { profile: true } },
                chatMessages: true,
            },
        });
        return (0, plain_to_class_1.plainToClass)(chat, chat_entity_1.ChatEntity);
    }
    async createChat(profileId, participantIds) {
        const profiles = [profileId, ...participantIds];
        const chat = await this.prisma.chat.create({
            data: {
                participants: {
                    create: profiles.map((id) => {
                        return {
                            profile: {
                                connect: { id },
                            },
                        };
                    }),
                },
            },
        });
        return (0, plain_to_class_1.plainToClass)(chat, chat_entity_1.ChatEntity);
    }
    async sendMessage(sendChatMessageInput) {
        const chatMessage = await this.prisma.chatMessage.create({
            data: sendChatMessageInput,
        });
        return (0, plain_to_class_1.plainToClass)(chatMessage, chat_message_entity_1.ChatMessageEntity);
    }
};
exports.ChatRepository = ChatRepository;
exports.ChatRepository = ChatRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ChatRepository);
//# sourceMappingURL=chat.repository.js.map