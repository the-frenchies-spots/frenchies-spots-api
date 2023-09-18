import { ChatEntity } from './chat.entity';
import { ProfileChatEntity } from './profile-chat.entity';
export declare class ChatMessageEntity {
    id: string;
    chat: ChatEntity;
    chatId: string;
    profileChat: ProfileChatEntity;
    profileChatId: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}
