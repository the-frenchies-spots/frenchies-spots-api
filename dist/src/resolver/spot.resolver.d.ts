import { SpotEntity } from '../entity/spot.entity';
import { SpotBusiness } from './../business/spot.business';
import { SpotInput } from '../dto/input/spot/spot-input';
import { SpotsInput } from '../dto/input/spot/spots-input';
import { DeleteResponse } from '../dto/response/delete.response';
import { SpotByIdResponse } from '../dto/spotByIdResponse';
export declare class SpotResolver {
    private readonly spotBusiness;
    constructor(spotBusiness: SpotBusiness);
    spotByPk(id: string, profileId: string | undefined): Promise<SpotByIdResponse>;
    spots(spotsInput: SpotsInput, profileId: string | undefined): Promise<SpotEntity[]>;
    insertSpot(insertSpotInput: SpotInput, profileId: string): Promise<SpotEntity>;
    updateSpot(updateSpotInput: SpotInput, profileId: string): Promise<SpotEntity>;
    deleteSpot(id: string, profileId: string): Promise<DeleteResponse>;
}
