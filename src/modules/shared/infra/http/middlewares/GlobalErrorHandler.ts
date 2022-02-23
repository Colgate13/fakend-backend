import { Request, Response, NextFunction } from 'express';
import AppError from '../../../../../errors/AppError';

export default function GlobalErrorHandler(
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction,
): void {

    if (err instanceof AppError) {
        console.log(err);
        response.status(err.statusCode).json({
            status: err.type,
            message: err.message,
        });
    } else if (err) {
        console.log(err);
        response.status(500).json({
            status: 'error',
            message: 'Internal server error',
        });
    }

    return next();
}