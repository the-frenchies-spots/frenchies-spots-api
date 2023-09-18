import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloDriver } from '@nestjs/apollo';

import { PrismaService } from './service/prisma.service';
import { AuthModule } from './module/auth.module';
import { UserModule } from './module/user.module';
import { SpotModule } from './module/spot.module';
import { ConfigModule } from '@nestjs/config';
import { RatingModule } from './module/rating.module';
import { FavoriteModule } from './module/favorite.module';
import { TagModule } from './module/tag.module';
import { ProfileModule } from './module/profile.module';
import { SocketModule } from './module/socket.module';
import { ContactModule } from './module/contact.module';
import { PictureModule } from './module/picture.module';
import { ChatModule } from './module/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      //autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      autoSchemaFile: true,
      playground: false,
      //playground: true,
      sortSchema: true,
      // cors: {
      //   credentials: true,
      //   origin: true,
      // },
    }),
    MongooseModule.forRoot(process.env.DATABASE_URL),
    AuthModule,
    SpotModule,
    UserModule,
    TagModule,
    ProfileModule,
    RatingModule,
    FavoriteModule,
    SocketModule,
    ChatModule,
    ContactModule,
    PictureModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
