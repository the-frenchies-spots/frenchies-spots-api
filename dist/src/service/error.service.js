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
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const errors_message_1 = require("../utils/errors-message");
let ErrorService = class ErrorService extends graphql_1.GraphQLError {
    constructor(codeError, err = '') {
        const errorMessage = errors_message_1.errorsMessage[codeError].errorMessage['en'];
        const statusCode = errors_message_1.errorsMessage[codeError].statusCode;
        super(`${errorMessage}${err}`, {
            extensions: {
                code: codeError,
                http: { status: statusCode },
            },
        });
    }
};
ErrorService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, Object])
], ErrorService);
exports.default = ErrorService;
//# sourceMappingURL=error.service.js.map