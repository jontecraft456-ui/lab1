import { Logger } from "../../common/loggers/logger";

export interface User {
    id: string;
    name: string;
    email: string;
}

export class UsersService {
    private readonly logger = new Logger("UsersService");
    private users: User[] = [];

    async create(data: Partial<User>): Promise<User> {
        if (!data.name || !data.email) {
            throw new Error("Los campos 'name' y 'email' son obligatorios");
        }

        const newUser: User = {
            id: crypto.randomUUID(),
            name: data.name,
            email: data.email,
        };

        this.users.push(newUser);
        this.logger.info(`Usuario creado con ID: ${newUser.id}`);
        return newUser;
    }

    async findAll(): Promise<User[]> {
        this.logger.info(`Listando ${this.users.length} usuarios`);
        return this.users;
    }

    async findOne(id: string): Promise<User> {
        const user = this.users.find((u) => u.id === id);
        if (!user) {
            throw new Error(`Usuario con ID ${id} no encontrado`);
        }
        return user;
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        const user = await this.findOne(id);
        if (data.name) user.name = data.name;
        if (data.email) user.email = data.email;

        this.logger.info(`Usuario actualizado con ID: ${id}`);
        return user;
    }

    async delete(id: string): Promise<{ deleted: boolean; user: User }> {
        const index = this.users.findIndex((u) => u.id === id);
        if (index === -1) {
            throw new Error(`Usuario con ID ${id} no encontrado`);
        }

        const [deletedUser] = this.users.splice(index, 1);
        this.logger.warn(`Usuario eliminado con ID: ${id}`);
        return { deleted: true, user: deletedUser! };
    }
}