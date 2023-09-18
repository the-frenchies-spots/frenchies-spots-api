import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, JwtPayloadWithRefreshToken } from '../types';
import { Request } from 'express';
declare const PublicTokenStrategy_base: new (...args: any[]) => Strategy;
export declare class PublicTokenStrategy extends PublicTokenStrategy_base {
    config: ConfigService;
    constructor(config: ConfigService);
    validate(req: Request, payload: JwtPayload): Promise<JwtPayloadWithRefreshToken>;
}
export {};
