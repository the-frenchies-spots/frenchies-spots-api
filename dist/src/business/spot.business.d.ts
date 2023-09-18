import { SpotEntity } from '../entity/spot.entity';
import { SpotInput } from '../dto/input/spot/spot-input';
import { SpotByIdResponse } from '../dto/spotByIdResponse';
import { SpotsInput } from '../dto/input/spot/spots-input';
import { SpotRepository } from '../repository/spot.repository';
import { DeleteResponse } from '../dto/response/delete.response';
import { GeospatialService } from '../service/spot-geospatial.service';
export declare class SpotBusiness {
    private spotRepository;
    private geoService;
    constructor(spotRepository: SpotRepository, geoService: GeospatialService);
    getById(id: string, profileId?: string | undefined): Promise<SpotByIdResponse>;
    getAll(spotsInput: SpotsInput, profileId: string | undefined): Promise<SpotEntity[]>;
    insert(insertSpotInput: SpotInput, profileId: string): Promise<SpotEntity>;
    update(updateSpotInput: SpotInput, profileId: string): Promise<SpotEntity>;
    checkUserIsOwner(spotId: string, currentProfileId: string): Promise<void>;
    delete(id: string, profileId: string): Promise<DeleteResponse>;
}
