import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repositories';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    // CREATING NEW NOTIFICATION
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    // DATA PERSISTENCY LAYER
    await this.notificationsRepository.create(notification);

    // OBJECT RETURN
    return {
      notification,
    };
  }
}
