import * as os from 'os';
import { SystemInfo } from '../entities/system-info.entity';

export class SystemInfoService {
    getSystemInfo(): SystemInfo {
    return {
        platform: os.platform(),
        architecture: os.arch(),
        totalMemory: Math.round(os.totalmem() / 1024 / 1024),
        freeMemory: Math.round(os.freemem() / 1024 / 1024),
    };
}
}
