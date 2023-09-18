import { UserEntity } from '../entity/user.entity';
import { SignUpInput } from '../dto/signup-input';
import { SignInInput } from '../dto/signin-input';
import { SignResponse } from '../dto/sign-response';
import { AuthBusiness } from '../business/auth.business';
import { LogoutResponse } from '../dto/logout-response';
export declare class AuthResolver {
    private readonly authBusiness;
    constructor(authBusiness: AuthBusiness);
    getLoginUser(userId: string): Promise<UserEntity>;
    signUp(signUpInput: SignUpInput): Promise<SignResponse>;
    signIn(signInInput: SignInInput): Promise<SignResponse>;
    logout(userId: string): Promise<LogoutResponse>;
    getNewTokens(userId: string, refreshToken: string): Promise<SignResponse>;
}
