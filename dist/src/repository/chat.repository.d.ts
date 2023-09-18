import { PrismaService } from '../service/prisma.service';
import { ChatEntity } from '../entity/chat.entity';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { ChatMessageEntity } from '../entity/chat-message.entity';
export declare class ChatRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(userId: string): Promise<ChatEntity[]>;
    getById(chatId: string): Promise<ChatEntity>;
    createChat(profileId: string, participantIds: string[]): Promise<ChatEntity>;
    sendMessage(sendChatMessageInput: SendChatMessageInput): Promise<ChatMessageEntity>;
}
