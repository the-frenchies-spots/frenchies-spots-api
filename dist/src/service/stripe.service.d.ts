import { StripeChargeResponse } from '../dto/response/stripe-charge.response';
export declare class StripeService {
    charge(amount: number, id: string): Promise<StripeChargeResponse>;
}
