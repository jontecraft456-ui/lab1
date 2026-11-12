import { AppServer } from "./server";

function bootstrap() {
    const server = new AppServer(3000);
    server.run();
}

bootstrap();