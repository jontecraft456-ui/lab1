import { Router, Request, Response } from 'express';
import { HashToolService } from '../hash.services/hash-tool.service';
import { HashRequestDto } from '../hash.dto.ts/hash-request.dto';

export class HashToolController {
    public router = Router();
    private service = new HashToolService();

    constructor() {
    this.router.post('/generate', this.generate);
    }

    private generate = (req: Request, res: Response): void => {
    const body: HashRequestDto = req.body;

    if (!body || typeof body.text !== 'string' || body.text === '') {
        res.status(400).json({ message: 'El campo "text" es obligatorio y debe ser texto' });
        return;
    }

    const hash = this.service.generateHash(body.text);
    res.json({ original: body.text, algorithm: 'sha256', hash });
    };
}