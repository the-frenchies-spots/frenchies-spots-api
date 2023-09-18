import { ChatBusiness } from '../business/chat.business';
import { ChatEntity } from '../entity/chat.entity';
import { InserChatInput } from '../dto/input/chat/insert-chat.input';
export declare class ChatResolver {
    private readonly chatBusiness;
    constructor(chatBusiness: ChatBusiness);
    chats(userId: string): Promise<ChatEntity[]>;
    chatByPk(chatId: string, profileId: string): Promise<ChatEntity>;
    insertChat(inserChatInput: InserChatInput, profileId: string): Promise<ChatEntity>;
}
