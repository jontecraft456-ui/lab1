import * as crypto from 'crypto';

export class HashToolService {
    generateHash(text: string): string {
    return crypto.createHash('sha256').update(text).digest('hex');
    }
}