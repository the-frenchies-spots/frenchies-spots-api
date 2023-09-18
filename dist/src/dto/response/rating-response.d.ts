import { RatingEntity } from '../../entity/rating.entity';
export declare class RatingResponse {
    currentRating?: RatingEntity;
    avg: number;
    maxVote: number;
}
