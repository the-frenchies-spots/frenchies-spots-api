"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentProfileId = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
exports.CurrentProfileId = (0, common_1.createParamDecorator)((_, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const user = req.user;
    return user?.profileId || undefined;
});
//# sourceMappingURL=currentProfileId.decorator..js.map