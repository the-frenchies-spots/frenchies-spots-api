import { Rating } from '@prisma/client';
import { ProfileEntity } from './profile.entity';
import { SpotEntity } from './spot.entity';
export declare class RatingEntity implements Rating {
    id: string;
    rate: number;
    profile: ProfileEntity;
    profileId: string;
    spot: SpotEntity;
    spotId: string;
    createdAt: Date;
    updatedAt: Date;
}
