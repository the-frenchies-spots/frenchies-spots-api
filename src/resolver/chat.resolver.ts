import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from '../guard/refreshToken.guard';
import { ChatBusiness } from '../business/chat.business';
import { ChatEntity } from '../entity/chat.entity';
import { CurrentProfileId } from '../decorator/currentProfileId.decorator.';

import { InserChatInput } from '../dto/input/chat/insert-chat.input';
import { CurrentUserId } from '../decorator/currentUserId.decorator';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { ChatMessageEntity } from '../entity/chat-message.entity';

@Resolver(() => ChatEntity)
export class ChatResolver {
  constructor(private readonly chatBusiness: ChatBusiness) {}

  @UseGuards(RefreshTokenGuard)
  @Query(() => [ChatEntity])
  chats(@CurrentUserId() userId: string): Promise<ChatEntity[]> {
    return this.chatBusiness.chats(userId);
  }

  @UseGuards(RefreshTokenGuard)
  @Query(() => ChatEntity)
  chatByPk(
    @Args('chatId') chatId: string,
    @CurrentProfileId() profileId: string,
  ): Promise<ChatEntity> {
    return this.chatBusiness.getByPk(chatId, profileId);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ChatEntity)
  insertChat(
    @Args('inserChatInput') inserChatInput: InserChatInput,
    @CurrentProfileId() profileId: string,
  ): Promise<ChatEntity> {
    return this.chatBusiness.insertChat(profileId, inserChatInput);
  }

  @UseGuards(RefreshTokenGuard)
  @Mutation(() => ChatMessageEntity)
  sendChatMessage(
    @Args('sendChatMessageInput') sendChatMessageInput: SendChatMessageInput,
  ): Promise<ChatMessageEntity> {
    return this.chatBusiness.sendMessage(sendChatMessageInput);
  }
}
