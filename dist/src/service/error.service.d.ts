import { GraphQLError } from 'graphql';
import { codeErrors } from '../enum/code-errors.enum';
declare class ErrorService extends GraphQLError {
    constructor(codeError: keyof typeof codeErrors, err?: string);
}
export default ErrorService;
