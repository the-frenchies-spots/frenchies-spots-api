import { UserEntity } from '../entity/user.entity';
export declare class SignResponse {
    accessToken: string;
    refreshToken: string;
    user: UserEntity;
}
