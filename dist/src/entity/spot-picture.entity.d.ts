import { SpotPicture } from '@prisma/client';
import { SpotEntity } from './spot.entity';
export declare class SpotPictureEntity implements SpotPicture {
    id: string;
    url: string;
    spot: SpotEntity;
    spotId: string;
    hostId: string;
    createdAt: Date;
    updatedAt: Date;
}
