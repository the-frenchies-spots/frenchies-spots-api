import { User, Role } from '@prisma/client';
import { ProfileEntity } from './profile.entity';
export declare class UserEntity implements User {
    id: string;
    email: string;
    hashedPassword: string;
    hashedRefreshToken: string | null;
    role: Role;
    profile?: ProfileEntity;
    createdAt: Date;
    updatedAt: Date;
}
