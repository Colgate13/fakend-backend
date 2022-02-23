import * as YupFather from 'yup';
import { ValidationError } from 'yup';

export const Yup = YupFather

interface Errors {
    [key: string]: string;
}

export function getValidationErrors(err: ValidationError): Errors {
    const validationErrors: Errors = {};

    err.inner.forEach((error) => {
        if (typeof error.path !== 'undefined') {
            validationErrors[error.path] = error.message;
        }
    });

    return validationErrors;
}