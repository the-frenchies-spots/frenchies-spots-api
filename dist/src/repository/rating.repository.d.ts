import { RatingInput } from '../dto/input/rating/rating-input';
import { TagListInput } from '../dto/input/tag/tag-list-input';
import { RatingEntity } from '../entity/rating.entity';
import { PrismaService } from '../service/prisma.service';
import { TAverageResponse } from '../type/average-response';
export declare class RatingRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createOrUpdate(ratingInput: RatingInput, profileId: string): Promise<RatingEntity>;
    getSpotAverageRating(spotId: string): Promise<TAverageResponse>;
    getAll(filterData?: TagListInput): Promise<(import("@prisma/client/runtime").GetResult<{
        id: string;
        name: string;
        tagPictureUrl: string;
        category: import("@prisma/client").CategoriesSpotAndTag;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {})[]>;
}
