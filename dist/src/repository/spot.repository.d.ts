import { SpotInput } from '../dto/input/spot/spot-input';
import { SpotsInput } from '../dto/input/spot/spots-input';
import { SpotByIdResponse } from '../dto/spotByIdResponse';
import { SpotEntity } from '../entity/spot.entity';
import { PrismaService } from '../service/prisma.service';
export type spotPaginationInput = {
    take: number;
    skip: number;
};
export declare class SpotRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getById(id: string, profileId?: string | undefined): Promise<SpotByIdResponse>;
    getAll(spotsInput: Omit<SpotsInput, 'point'>, ids: string[] | undefined, profileId?: string | undefined): Promise<SpotEntity[]>;
    create(insertSpotInput: SpotInput, profileId: string): Promise<SpotEntity>;
    update(updateSpotInput: SpotInput): Promise<SpotEntity>;
    delete(spotId: string, profileId: string): Promise<boolean>;
    updateAverageRatingBySpotId(spotId: string, avg: number): Promise<boolean>;
}
