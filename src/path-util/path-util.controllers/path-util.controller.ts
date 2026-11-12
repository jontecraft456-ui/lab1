import { Router, Request, Response } from 'express';
import { PathUtilService } from '../path-util.services/path-util.service';
import { ParsePathDto } from '../path-util.dto/parse-path.dto';

export class PathUtilController {
    public router = Router();
    private service = new PathUtilService();

    constructor() {
    this.router.post('/analyze', this.analyze);
    }

    private analyze = (req: Request, res: Response): void => {
    const body: ParsePathDto = req.body;

    if (!body || typeof body.path !== 'string' || body.path.trim() === '') {
        res.status(400).json({ message: 'El campo "path" es obligatorio y debe ser texto' });
        return;
    }

    res.json(this.service.analyze(body.path));
    };
}