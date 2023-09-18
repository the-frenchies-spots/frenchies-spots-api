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
exports.ContactResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const refreshToken_guard_1 = require("../guard/refreshToken.guard");
const contact_entity_1 = require("../entity/contact.entity");
const contact_business_1 = require("../business/contact.business");
const currentProfileId_decorator_1 = require("../decorator/currentProfileId.decorator.");
const contacts_input_1 = require("../dto/input/contact/contacts.input");
let ContactResolver = class ContactResolver {
    constructor(contactBusiness) {
        this.contactBusiness = contactBusiness;
    }
    contacts(contactsInput, profileId) {
        return this.contactBusiness.getAll(profileId, contactsInput);
    }
};
exports.ContactResolver = ContactResolver;
__decorate([
    (0, common_1.UseGuards)(refreshToken_guard_1.RefreshTokenGuard),
    (0, graphql_1.Query)(() => [contact_entity_1.ContactEntity]),
    __param(0, (0, graphql_1.Args)('contactsInput')),
    __param(1, (0, currentProfileId_decorator_1.CurrentProfileId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [contacts_input_1.ContactsInput, String]),
    __metadata("design:returntype", Promise)
], ContactResolver.prototype, "contacts", null);
exports.ContactResolver = ContactResolver = __decorate([
    (0, graphql_1.Resolver)(() => contact_entity_1.ContactEntity),
    __metadata("design:paramtypes", [contact_business_1.ContactBusiness])
], ContactResolver);
//# sourceMappingURL=contact.resolver.js.map