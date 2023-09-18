import { ProfileEntity } from './profile.entity';
import { ChatEntity } from './chat.entity';
import { ChatMessageEntity } from './chat-message.entity';
export declare class ProfileChatEntity {
    id: string;
    profile: ProfileEntity;
    profileId: string;
    chat: ChatEntity;
    chatId: string;
    chatMessages: ChatMessageEntity[];
    createdAt: Date;
    updatedAt: Date;
}
