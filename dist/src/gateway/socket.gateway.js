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
exports.SocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const chat_business_1 = require("../business/chat.business");
const send_chat_message_input_1 = require("../dto/input/chat/send-chat-message.input");
const notification_business_1 = require("../business/notification.business");
const send_notif_input_1 = require("../dto/input/notif/send-notif.input");
let SocketGateway = class SocketGateway {
    constructor(chatBusiness, notifBusiness) {
        this.chatBusiness = chatBusiness;
        this.notifBusiness = notifBusiness;
    }
    afterInit() {
        try {
            this.server.engine.ws.perMessageDeflate = false;
        }
        catch (error) {
            console.error(error);
        }
    }
    async handleChatMessage(payload) {
        try {
            console.log('==============================================');
            console.log(payload);
            this.server.emit(`chat:${payload.chatId}`, payload);
            this.chatBusiness.sendMessage(payload);
            console.log('==============================================');
        }
        catch (error) {
            console.error(error);
        }
    }
    async handleNotification(payload) {
        try {
            this.server.emit(`notif:${payload.profileId}`, payload);
            this.notifBusiness.sendNotif(payload);
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.SocketGateway = SocketGateway;
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", Object)
], SocketGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('chat'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_chat_message_input_1.SendChatMessageInput]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleChatMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('notif'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_notif_input_1.SendNotifInput]),
    __metadata("design:returntype", Promise)
], SocketGateway.prototype, "handleNotification", null);
exports.SocketGateway = SocketGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(+process.env.SOCKET_PORT_URL, { cors: '*:*' }),
    __metadata("design:paramtypes", [chat_business_1.ChatBusiness,
        notification_business_1.NotificationBusiness])
], SocketGateway);
//# sourceMappingURL=socket.gateway.js.map