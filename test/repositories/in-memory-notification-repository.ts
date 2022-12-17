import { NotificationsRepository } from '../../src/app/repositories/notifications-repositories';
import { Notification } from '../../src/app/entities/notification';

export class InMemoryNotificationsRepository
  // eslint-disable-next-line prettier/prettier
  implements NotificationsRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
