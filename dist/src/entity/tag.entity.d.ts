import { Tag, CategoriesSpotAndTag } from '@prisma/client';
import { SpotEntity } from './spot.entity';
export declare class TagEntity implements Tag {
    id: string;
    name: string;
    tagPictureUrl: string;
    category: CategoriesSpotAndTag;
    spots: SpotEntity[];
    createdAt: Date;
    updatedAt: Date;
}
