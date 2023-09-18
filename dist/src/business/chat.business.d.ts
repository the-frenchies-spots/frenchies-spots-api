import { InserChatInput } from '../dto/input/chat/insert-chat.input';
import { ChatEntity } from '../entity/chat.entity';
import { ChatRepository } from '../repository/chat.repository';
import { ContactRepository } from '../repository/contact.repository';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { ChatMessageEntity } from '../entity/chat-message.entity';
export declare class ChatBusiness {
    private chatRepository;
    private contactRepository;
    constructor(chatRepository: ChatRepository, contactRepository: ContactRepository);
    chats(userId: string): Promise<ChatEntity[]>;
    sendMessage(sendChatMessageInput: SendChatMessageInput): Promise<ChatMessageEntity>;
    getByPk(chatId: string, profileId: string): Promise<ChatEntity>;
    connectAllContacts(profileIds: string[]): Promise<boolean>;
    insertChat(profileId: string, inserChatInput: InserChatInput): Promise<ChatEntity>;
}
