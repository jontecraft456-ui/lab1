import { Router, Request, Response } from 'express';
import { EnvConfigService } from '../env.services/env-config.service';

export class EnvConfigController {
    public router = Router();
    private service = new EnvConfigService();

    constructor() {
    this.router.get('/env', this.getEnv);
    }

    private getEnv = (req: Request, res: Response): void => {
    res.json(this.service.getEnvInfo());
    };
}