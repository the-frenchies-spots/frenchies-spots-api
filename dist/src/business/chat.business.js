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
exports.ChatBusiness = void 0;
const common_1 = require("@nestjs/common");
const chat_repository_1 = require("../repository/chat.repository");
const extract_array_1 = require("../utils/extract-array");
const contact_repository_1 = require("../repository/contact.repository");
const error_service_1 = require("../service/error.service");
const code_errors_enum_1 = require("../enum/code-errors.enum");
const { ACCESS_DENIED, INTERNAL_SERVER_ERROR } = code_errors_enum_1.codeErrors;
let ChatBusiness = class ChatBusiness {
    constructor(chatRepository, contactRepository) {
        this.chatRepository = chatRepository;
        this.contactRepository = contactRepository;
    }
    async chats(userId) {
        return this.chatRepository.getAll(userId);
    }
    async sendMessage(sendChatMessageInput) {
        return this.chatRepository.sendMessage(sendChatMessageInput);
    }
    async getByPk(chatId, profileId) {
        const chat = await this.chatRepository.getById(chatId);
        if (!chat)
            throw new error_service_1.default(INTERNAL_SERVER_ERROR);
        const profileAuthorize = chat?.participants?.filter((participant) => participant.profileId === profileId)?.length;
        if (!profileAuthorize)
            throw new error_service_1.default(ACCESS_DENIED);
        return chat;
    }
    async connectAllContacts(profileIds) {
        profileIds.forEach(async (currentId) => {
            const currentParticipantIds = (0, extract_array_1.extractArray)(currentId, profileIds);
            const contactConnected = await this.contactRepository.connectContacts(currentId, currentParticipantIds);
            if (!contactConnected)
                throw new error_service_1.default(INTERNAL_SERVER_ERROR);
        });
        return true;
    }
    async insertChat(profileId, inserChatInput) {
        const { participantIds } = inserChatInput;
        const profileIds = [profileId, ...participantIds];
        await this.connectAllContacts(profileIds);
        return this.chatRepository.createChat(profileId, participantIds);
    }
};
exports.ChatBusiness = ChatBusiness;
exports.ChatBusiness = ChatBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [chat_repository_1.ChatRepository,
        contact_repository_1.ContactRepository])
], ChatBusiness);
//# sourceMappingURL=chat.business.js.map