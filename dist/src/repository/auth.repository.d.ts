import { UserEntity } from '../entity/user.entity';
import { PrismaService } from '../service/prisma.service';
export declare class AuthRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getOneByEmail(email: string): Promise<UserEntity>;
    getOneById(userId: string): Promise<UserEntity>;
    create(pseudo: string, hashedPassword: string, email: string): Promise<UserEntity>;
    updateRefreshToken(userId: string, hashedRefreshToken: string): Promise<UserEntity>;
    disconnect(userId: string): Promise<boolean>;
}
