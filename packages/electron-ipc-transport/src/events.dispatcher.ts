import { EventEmitter } from 'events';
import { MESSAGE_CHANNEL } from './constants/messages';

export class EventsDispatcher extends EventEmitter {
  emit(...args: unknown[]) {
    const [handler] = this.listeners(MESSAGE_CHANNEL);

    return Reflect.apply(handler, this, args);
  }
}
