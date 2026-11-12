import express from "express";
import cors from "cors";
import { FactoryRoutes } from "./factory-routes";
import { logger } from "./common/loggers/logger";

export class AppServer {
    private app = express();

    constructor(private readonly port: number = 3000) {}

    run() {
        // 1. Middlewares
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // 2. Routes
        this.app.use("/", FactoryRoutes.routes);

        // 3. Listen
        this.app.listen(this.port, () => {
            logger.log(`Server running on port ${this.port}`, "ServerTS");
        });
    }
}