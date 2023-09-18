import { RatingInput } from '../dto/input/rating/rating-input';
import { RatingRepository } from '../repository/rating.repository';
import { SpotRepository } from '../repository/spot.repository';
import { RatingResponse } from '../dto/response/rating-response';
export declare class RatingBusiness {
    private ratingRepository;
    private spotRepository;
    constructor(ratingRepository: RatingRepository, spotRepository: SpotRepository);
    createOrUpdate(ratingInput: RatingInput, profileId: string): Promise<RatingResponse>;
}
