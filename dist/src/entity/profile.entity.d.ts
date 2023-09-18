import { Profile } from '@prisma/client';
import { UserEntity } from './user.entity';
import { SpotEntity } from './spot.entity';
import { RatingEntity } from './rating.entity';
import { FavoriteEntity } from './favorite.entity';
import { ContactEntity } from './contact.entity';
import { ProfileChatEntity } from './profile-chat.entity';
import { LocationEntity } from './location.entity';
export declare class ProfileEntity implements Profile {
    id: string;
    pseudo: string;
    photoUrl: string;
    avatarUrl: string;
    gamePoint: number;
    userId: string;
    user: UserEntity;
    spots: SpotEntity[];
    ratings: RatingEntity[];
    favorites: FavoriteEntity[];
    contacts: ContactEntity[];
    profileChats?: ProfileChatEntity[];
    location: LocationEntity;
    createdAt: Date;
    updatedAt: Date;
}
