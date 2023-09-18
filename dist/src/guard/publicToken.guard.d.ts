import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ExecutionContext } from '@nestjs/common';
declare const PublicTokenGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class PublicTokenGuard extends PublicTokenGuard_base {
    private reflector;
    constructor(reflector: Reflector);
    getRequest(context: ExecutionContext): any;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
export {};
