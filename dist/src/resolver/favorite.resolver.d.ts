import { FavoriteBusiness } from '../business/favorite.business';
import { FavoriteInput } from '../dto/input/favorite/favorite-input';
import { ToggleFavoriteResponse } from '../dto/response/toggle-favorite-response';
import { SpotEntity } from '../entity/spot.entity';
export declare class FavoriteResolver {
    private readonly favoriteBusiness;
    constructor(favoriteBusiness: FavoriteBusiness);
    spotsFavorite(profileId: string): Promise<SpotEntity[]>;
    toggleFavorite(favoriteInput: FavoriteInput, profileId: string): Promise<ToggleFavoriteResponse>;
}
