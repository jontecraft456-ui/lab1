export interface EnvInfo {
    nodeVersion: string;
    environment: string;
    uptimeSeconds: number;
}

export class EnvConfigService {
    getEnvInfo(): EnvInfo {
    return {
        nodeVersion: process.version,
        environment: process.env.NODE_ENV || 'development',
        uptimeSeconds: Math.round(process.uptime()),
    };
    }
}