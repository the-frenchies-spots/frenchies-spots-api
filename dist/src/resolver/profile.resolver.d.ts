import { UserEntity } from '../entity/user.entity';
import { ProfileEntity } from '../entity/profile.entity';
import { ProfileBusiness } from '../business/profile.business';
import { ProfileInput } from '../dto/input/profile/profile.input';
import { BuyPointInput } from '../dto/input/buy-point/buy-point-input';
import { ProfilesInput } from '../dto/input/profile/profiles.input';
export declare class ProfileResolver {
    private readonly profileBusiness;
    constructor(profileBusiness: ProfileBusiness);
    profiles(profilesInput: ProfilesInput, profileId: string | undefined): Promise<ProfileEntity[]>;
    buyPoint(buyPoint: BuyPointInput, userId: string): Promise<UserEntity>;
    updateProfile(profileInput: ProfileInput, userId: string): Promise<UserEntity>;
}
