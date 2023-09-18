import { Favorite } from '@prisma/client';
import { ProfileEntity } from './profile.entity';
import { SpotEntity } from './spot.entity';
export declare class FavoriteEntity implements Favorite {
    id: string;
    profile: ProfileEntity;
    profileId: string;
    spot: SpotEntity;
    spotId: string;
    createdAt: Date;
    updatedAt: Date;
}
