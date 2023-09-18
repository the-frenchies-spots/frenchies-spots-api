"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthBusiness = void 0;
const bcryptjs_1 = require("bcryptjs");
const common_1 = require("@nestjs/common");
const error_service_1 = require("../service/error.service");
const code_errors_enum_1 = require("../enum/code-errors.enum");
const token_service_1 = require("../service/token.service");
const auth_repository_1 = require("../repository/auth.repository");
const { USER_ALREADY_EXISTS, ACCESS_DENIED, AUTHENTICATION_DENIED } = code_errors_enum_1.codeErrors;
let AuthBusiness = class AuthBusiness {
    constructor(authRepository, tokenService) {
        this.authRepository = authRepository;
        this.tokenService = tokenService;
    }
    async getById(userId) {
        return this.authRepository.getOneById(userId);
    }
    async signup(signUpInput) {
        const { pseudo, password, email } = signUpInput;
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 10);
        const userAlreadyExist = await this.authRepository.getOneByEmail(email);
        if (userAlreadyExist) {
            throw new error_service_1.default(USER_ALREADY_EXISTS);
        }
        const user = await this.authRepository.create(pseudo, hashedPassword, email);
        return this.refreshAuthAccess(user);
    }
    async signin(signInInput) {
        const { email, password } = signInInput;
        const user = await this.authRepository.getOneByEmail(email);
        if (!user) {
            throw new error_service_1.default(AUTHENTICATION_DENIED);
        }
        const doPasswordsMatch = await (0, bcryptjs_1.compare)(password, user.hashedPassword);
        if (!doPasswordsMatch) {
            throw new error_service_1.default(AUTHENTICATION_DENIED);
        }
        return this.refreshAuthAccess(user);
    }
    async getNewTokens(userId, rt) {
        const user = await this.authRepository.getOneById(userId);
        if (!user) {
            throw new error_service_1.default(ACCESS_DENIED);
        }
        const doRefreshTokensMatch = await (0, bcryptjs_1.compare)(rt, user.hashedRefreshToken);
        if (!doRefreshTokensMatch) {
            throw new error_service_1.default(ACCESS_DENIED);
        }
        return this.refreshAuthAccess(user);
    }
    async refreshAuthAccess(user) {
        const { accessToken, refreshToken } = await this.tokenService.create(user.id, user.email, user.profile.id, user.role);
        const hashedRefreshToken = await (0, bcryptjs_1.hash)(refreshToken, 10);
        await this.authRepository.updateRefreshToken(user.id, hashedRefreshToken);
        return { accessToken, refreshToken, user };
    }
    async logout(userId) {
        const loggedOut = await this.authRepository.disconnect(userId);
        return { loggedOut };
    }
};
exports.AuthBusiness = AuthBusiness;
exports.AuthBusiness = AuthBusiness = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        token_service_1.TokenService])
], AuthBusiness);
//# sourceMappingURL=auth.business.js.map