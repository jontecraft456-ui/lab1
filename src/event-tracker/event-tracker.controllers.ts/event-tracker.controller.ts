import { Router, Request, Response } from 'express';
import { EventTrackerService } from '../event-tracker.services.ts/event-tracker.service';

export class EventTrackerController {
    public router = Router();
    private service = new EventTrackerService();

    constructor() {
    this.router.post('/login', this.login);
    }

    private login = (req: Request, res: Response): void => {
    const { username } = req.body || {};

    if (typeof username !== 'string' || username.trim() === '') {
        res.status(400).json({ message: 'El campo "username" es obligatorio y debe ser texto' });
        return;
    }

    this.service.triggerLogin(username);
    res.json({ message: 'Evento registrado con éxito' });
    };
}