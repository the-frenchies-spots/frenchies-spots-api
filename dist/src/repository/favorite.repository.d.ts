import { ProfileEntity } from '../entity/profile.entity';
import { PrismaService } from '../service/prisma.service';
export declare class FavoriteRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getProfileFavorites(profileId: string): Promise<ProfileEntity>;
    getById(id: string): Promise<import("@prisma/client/runtime").GetResult<{
        id: string;
        profileId: string;
        spotId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}>;
    create(spotId: string, profileId: string): import("@prisma/client").Prisma.Prisma__FavoriteClient<import("@prisma/client/runtime").GetResult<{
        id: string;
        profileId: string;
        spotId: string;
        createdAt: Date;
        updatedAt: Date;
    }, unknown> & {}, never, import("@prisma/client/runtime").DefaultArgs>;
    delete(spotId: string, favoriteId: string): Promise<boolean>;
}
