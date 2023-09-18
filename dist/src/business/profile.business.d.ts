import { UserEntity } from '../entity/user.entity';
import { StripeService } from '../service/stripe.service';
import { AuthRepository } from '../repository/auth.repository';
import { ProfileRepository } from '../repository/profile.repository';
import { BuyPointInput } from '../dto/input/buy-point/buy-point-input';
import { ProfileInput } from '../dto/input/profile/profile.input';
import { ProfileEntity } from '../entity/profile.entity';
import { ProfilesInput } from '../dto/input/profile/profiles.input';
import { GeospatialService } from '../service/spot-geospatial.service';
export declare class ProfileBusiness {
    private profileRepository;
    private stripeService;
    private authRepository;
    private geoService;
    constructor(profileRepository: ProfileRepository, stripeService: StripeService, authRepository: AuthRepository, geoService: GeospatialService);
    getAll(profilesInput: ProfilesInput, profileId: string | undefined): Promise<ProfileEntity[]>;
    getUserOrThrow(userId: string): Promise<UserEntity>;
    buyPoint(buyPoint: BuyPointInput, userId: string): Promise<UserEntity>;
    updateProfile(profileInput: ProfileInput, userId: string): Promise<UserEntity>;
}
