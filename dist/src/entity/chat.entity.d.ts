import { ProfileChatEntity } from './profile-chat.entity';
import { ChatMessageEntity } from './chat-message.entity';
export declare class ChatEntity {
    id: string;
    participants: ProfileChatEntity[];
    chatMessages: ChatMessageEntity[];
    isTemporary: boolean;
    createdAt: Date;
    updatedAt: Date;
}
