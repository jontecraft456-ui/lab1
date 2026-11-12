import os from "os";
import fs from "fs";
import path from "path";
import { LogLevel } from "./logger";

export class SaveLog {
    private logsDir = path.resolve("logs");

    save(message: string, severityLevel: LogLevel, context?: string) {
        if (!fs.existsSync(this.logsDir)) {
            fs.mkdirSync(this.logsDir, { recursive: true });
        }

        const date = new Date().toLocaleString().toUpperCase();
        const formatMessage = `${date} [${severityLevel}] ${message} ${context ? `- [${context}]` : ""}${os.EOL}`;
        const nameFile = new Date().toISOString().split("T").at(0) ?? "access";
        const filePath = path.join(this.logsDir, `${nameFile}.log`);

        fs.appendFile(filePath, formatMessage, (err) => {
            if (err) {
                console.error("No se pudo guardar el archivo de log:", err.message);
            }
        });
    }
}

export const saveLog = new SaveLog();