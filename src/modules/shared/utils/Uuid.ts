import { v4 as uuidv4, validate } from 'uuid';

async function createUuid(): Promise<string> {
    return uuidv4();
}

async function validateUuid(value: string): Promise<boolean> {
    return validate(value);
}

export { createUuid, validateUuid };