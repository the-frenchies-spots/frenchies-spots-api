import { UserEntity } from '../entity/user.entity';
import { PrismaService } from '../service/prisma.service';
import { ProfileInput } from '../dto/input/profile/profile.input';
import { ProfileEntity } from '../entity/profile.entity';
export declare class ProfileRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(profileId: string | undefined, ids?: string[] | undefined): Promise<ProfileEntity[]>;
    update(profileInput: ProfileInput, userId: string): Promise<UserEntity>;
}
