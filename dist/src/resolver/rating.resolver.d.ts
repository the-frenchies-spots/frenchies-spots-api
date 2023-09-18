import { RatingInput } from '../dto/input/rating/rating-input';
import { RatingBusiness } from '../business/rating.business';
import { RatingResponse } from '../dto/response/rating-response';
export declare class RatingResolver {
    private readonly ratingBusiness;
    constructor(ratingBusiness: RatingBusiness);
    createOrUpdateRating(ratingInput: RatingInput, profileId: string): Promise<RatingResponse>;
}
