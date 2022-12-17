import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notificaiton: Notification): Promise<void>;
}
