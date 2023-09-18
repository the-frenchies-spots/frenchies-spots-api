import { ChatBusiness } from '../business/chat.business';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { NotificationBusiness } from '../business/notification.business';
import { SendNotifInput } from '../dto/input/notif/send-notif.input';
export declare class SocketGateway {
    private readonly chatBusiness;
    private readonly notifBusiness;
    constructor(chatBusiness: ChatBusiness, notifBusiness: NotificationBusiness);
    server: any;
    afterInit(): void;
    handleChatMessage(payload: SendChatMessageInput): Promise<void>;
    handleNotification(payload: SendNotifInput): Promise<void>;
}
