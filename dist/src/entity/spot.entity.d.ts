import { Spot, CategoriesSpotAndTag } from '@prisma/client';
import { RatingEntity } from './rating.entity';
import { ProfileEntity } from './profile.entity';
import { FavoriteEntity } from './favorite.entity';
import { SpotPictureEntity } from './spot-picture.entity';
import { TagOnSpotEntity } from './tag-on-spot.entity';
import { LocationEntity } from './location.entity';
export declare class SpotEntity implements Spot {
    id: string;
    name: string;
    description: string;
    isCanPark: boolean;
    isHidden: boolean;
    category: CategoriesSpotAndTag;
    profile: ProfileEntity;
    profileId: string;
    location: LocationEntity;
    region: string;
    address: string;
    averageRating: number;
    spotPicture?: SpotPictureEntity[] | null;
    ratings?: RatingEntity[] | null;
    favorites?: FavoriteEntity[] | null;
    tags?: TagOnSpotEntity[] | null;
    createdAt: Date;
    updatedAt: Date;
}
