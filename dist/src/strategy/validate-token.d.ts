import { JwtPayload, JwtPayloadWithRefreshToken } from '../types';
import { Request } from 'express';
export declare const validateToken: (req: Request, payload: JwtPayload) => Promise<JwtPayloadWithRefreshToken>;
