import { Router, Request, Response } from 'express';
import { SystemInfo } from '../entities/system-info.entity';
import { SystemInfoService } from '../services/system.service';


export class SystemInfoController {
    public router = Router();
    private service = new SystemInfoService();

    constructor() {
    this.router.get('/info', this.getInfo);
    }

    private getInfo = (req: Request, res: Response): void => {
    const info: SystemInfo = this.service.getSystemInfo();
    res.json(info);
    };
}