"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const mongoose_1 = require("@nestjs/mongoose");
const apollo_1 = require("@nestjs/apollo");
const prisma_service_1 = require("./service/prisma.service");
const auth_module_1 = require("./module/auth.module");
const user_module_1 = require("./module/user.module");
const spot_module_1 = require("./module/spot.module");
const config_1 = require("@nestjs/config");
const rating_module_1 = require("./module/rating.module");
const favorite_module_1 = require("./module/favorite.module");
const tag_module_1 = require("./module/tag.module");
const profile_module_1 = require("./module/profile.module");
const socket_module_1 = require("./module/socket.module");
const contact_module_1 = require("./module/contact.module");
const picture_module_1 = require("./module/picture.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                sortSchema: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.DATABASE_URL),
            auth_module_1.AuthModule,
            spot_module_1.SpotModule,
            user_module_1.UserModule,
            tag_module_1.TagModule,
            profile_module_1.ProfileModule,
            rating_module_1.RatingModule,
            favorite_module_1.FavoriteModule,
            socket_module_1.SocketModule,
            contact_module_1.ContactModule,
            picture_module_1.PictureModule,
        ],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map