"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const error_service_1 = require("../service/error.service");
const code_errors_enum_1 = require("../enum/code-errors.enum");
const { ACCESS_DENIED } = code_errors_enum_1.codeErrors;
exports.Admin = (0, common_1.createParamDecorator)((_, context) => {
    const ctx = graphql_1.GqlExecutionContext.create(context);
    const req = ctx.getContext().req;
    const user = req.user;
    if (user.role === 'SIMPLE_USER') {
        throw new error_service_1.default(ACCESS_DENIED);
    }
    return user;
});
//# sourceMappingURL=admin.decorator.js.map