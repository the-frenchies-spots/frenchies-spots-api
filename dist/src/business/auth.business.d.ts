import { SignUpInput } from '../dto/signup-input';
import { SignInInput } from '../dto/signin-input';
import { UserEntity } from '../entity/user.entity';
import { SignResponse } from '../dto/sign-response';
import { LogoutResponse } from '../dto/logout-response';
import { TokenService } from '../service/token.service';
import { AuthRepository } from '../repository/auth.repository';
export declare class AuthBusiness {
    private authRepository;
    private tokenService;
    constructor(authRepository: AuthRepository, tokenService: TokenService);
    getById(userId: string): Promise<UserEntity>;
    signup(signUpInput: SignUpInput): Promise<SignResponse>;
    signin(signInInput: SignInInput): Promise<SignResponse>;
    getNewTokens(userId: string, rt: string): Promise<SignResponse>;
    refreshAuthAccess(user: UserEntity): Promise<SignResponse>;
    logout(userId: string): Promise<LogoutResponse>;
}
