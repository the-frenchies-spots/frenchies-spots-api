import { codeErrors } from '../enum/code-errors.enum';
export interface TError {
    statusCode: number;
    errorMessage: Record<string, string>;
}
export declare const errorsMessage: Record<keyof typeof codeErrors, TError>;
