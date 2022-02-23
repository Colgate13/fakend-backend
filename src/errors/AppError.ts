class AppError {
    public readonly message: string;

    public readonly statusCode: number;

    public readonly type: 'error' | 'info' | 'warn' | string;

    constructor(message: string, statusCode = 400, type = 'error') {
        this.message = message;
        this.statusCode = statusCode;
        this.type = type;
    }
}

export default AppError;