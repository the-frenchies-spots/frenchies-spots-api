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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../entity/user.entity");
const signup_input_1 = require("../dto/signup-input");
const signin_input_1 = require("../dto/signin-input");
const sign_response_1 = require("../dto/sign-response");
const public_decorator_1 = require("../decorator/public.decorator");
const auth_business_1 = require("../business/auth.business");
const logout_response_1 = require("../dto/logout-response");
const common_1 = require("@nestjs/common");
const currentUserId_decorator_1 = require("../decorator/currentUserId.decorator");
const currentUser_decorator_1 = require("../decorator/currentUser.decorator");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const newTokensResponse_1 = require("../dto/newTokensResponse");
let AuthResolver = class AuthResolver {
    constructor(authBusiness) {
        this.authBusiness = authBusiness;
    }
    getLoginUser(userId) {
        return this.authBusiness.getById(userId);
    }
    signUp(signUpInput) {
        return this.authBusiness.signup(signUpInput);
    }
    signIn(signInInput) {
        return this.authBusiness.signin(signInInput);
    }
    logout(userId) {
        return this.authBusiness.logout(userId);
    }
    getNewTokens(userId, refreshToken) {
        return this.authBusiness.getNewTokens(userId, refreshToken);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Query)(() => user_entity_1.UserEntity),
    __param(0, (0, currentUserId_decorator_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "getLoginUser", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Mutation)(() => sign_response_1.SignResponse),
    __param(0, (0, graphql_1.Args)('signUpInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_input_1.SignUpInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "signUp", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, graphql_1.Mutation)(() => sign_response_1.SignResponse),
    __param(0, (0, graphql_1.Args)('signInInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_input_1.SignInInput]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "signIn", null);
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => logout_response_1.LogoutResponse),
    __param(0, (0, currentUserId_decorator_1.CurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "logout", null);
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Mutation)(() => newTokensResponse_1.NewTokensResponse),
    __param(0, (0, currentUserId_decorator_1.CurrentUserId)()),
    __param(1, (0, currentUser_decorator_1.CurrentUser)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuthResolver.prototype, "getNewTokens", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_entity_1.UserEntity),
    __metadata("design:paramtypes", [auth_business_1.AuthBusiness])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map