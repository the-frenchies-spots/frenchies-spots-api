import { SpotRepository } from '../repository/spot.repository';
import { FavoriteInput } from '../dto/input/favorite/favorite-input';
import { FavoriteRepository } from '../repository/favorite.repository';
import { ToggleFavoriteResponse } from '../dto/response/toggle-favorite-response';
import { SpotEntity } from '../entity/spot.entity';
export declare class FavoriteBusiness {
    private favoriteRepository;
    private spotRepository;
    constructor(favoriteRepository: FavoriteRepository, spotRepository: SpotRepository);
    getAllByProfileId(profileId: string): Promise<SpotEntity[]>;
    createOrDelete(favoriteInput: FavoriteInput, profileId: string): Promise<ToggleFavoriteResponse>;
}
