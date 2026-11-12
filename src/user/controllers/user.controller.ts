import { Request, Response } from "express";
import { UsersService } from "../services/user.service";
import { logger } from "../../common/loggers/logger";

export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    private handleError(res: Response, err: unknown) {
        const message = err instanceof Error ? err.message : "Error desconocido";
        logger.error(message, "UsersController");
        res.status(500).json({
            error: "ERROR INESPERADO, VERIFIQUE LOS LOGS DEL SISTEMA",
            details: message,
        });
    }

    create = (req: Request, res: Response) => {
        this.usersService
            .create(req.body)
            .then((user) => res.status(201).json(user))
            .catch((err) => this.handleError(res, err));
    };

    update = (req: Request, res: Response) => {
        this.usersService
            .update(String(req.params.id), req.body)
            .then((user) => res.status(200).json(user))
            .catch((err) => this.handleError(res, err));
    };

    delete = (req: Request, res: Response) => {
        this.usersService
            .delete(String(req.params.id))
            .then((result) => res.status(200).json(result))
            .catch((err) => this.handleError(res, err));
    };

    findOne = (req: Request, res: Response) => {
        this.usersService
            .findOne(String(req.params.id))
            .then((user) => res.status(200).json(user))
            .catch((err) => this.handleError(res, err));
    };

    findAll = (_req: Request, res: Response) => {
        this.usersService
            .findAll()
            .then((users) => res.status(200).json(users))
            .catch((err) => this.handleError(res, err));
    };
}