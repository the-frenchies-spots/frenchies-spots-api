"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
const stripe_1 = require("stripe");
const common_1 = require("@nestjs/common");
const stripe = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-08-16',
});
const handleError = (err) => {
    console.log(err);
    return { message: 'Payment not succeed', success: false };
};
let StripeService = class StripeService {
    async charge(amount, id) {
        try {
            stripe.paymentIntents
                .create({
                amount,
                currency: 'EUR',
                description: 'Frenchies Spots Shoping',
                payment_method: id,
            })
                .then(() => ({ message: 'Payment succeed', success: true }))
                .catch((err) => handleError(err));
            return { message: 'Payment succeed', success: true };
        }
        catch (err) {
            handleError(err);
        }
    }
};
exports.StripeService = StripeService;
exports.StripeService = StripeService = __decorate([
    (0, common_1.Injectable)()
], StripeService);
//# sourceMappingURL=stripe.service.js.map