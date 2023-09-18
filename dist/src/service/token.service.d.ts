import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
export declare class TokenService {
    private jwtService;
    private configService;
    constructor(jwtService: JwtService, configService: ConfigService);
    create(userId: string, email: string, profileId: string, role: Role): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
