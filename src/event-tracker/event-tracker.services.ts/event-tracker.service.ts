import { EventEmitter } from 'events';

export class EventTrackerService {
    private emitter = new EventEmitter();

    constructor() {
    this.emitter.on('user_login', (username: string) => {
        console.log(`[EVENTO] El usuario "${username}" se ha conectado`);
    });
    }

    triggerLogin(username: string): void {
    this.emitter.emit('user_login', username);
    }
}