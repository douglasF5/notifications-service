import { Notification } from '../entities/notification';

export abstract class NotificationsRepository {
  abstract create(notificaiton: Notification): Promise<void>;
  abstract findById(notificaitonId: string): Promise<Notification | null>;
  abstract save(notificaitonId: Notification): Promise<void>;
}
