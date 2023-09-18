import { TagEntity } from './tag.entity';
export declare class TagOnSpotEntity {
    id: string;
    tagId: string;
    spotId: string;
    tag: TagEntity;
    createdAt: Date;
    updatedAt: Date;
}
