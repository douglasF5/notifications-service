import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
      canceledAt: notification.canceledAt,
    };
  }

  static toDomain(rawNotification: RawNotification): Notification {
    return new Notification(
      {
        content: new Content(rawNotification.content),
        category: rawNotification.category,
        recipientId: rawNotification.recipientId,
        readAt: rawNotification.readAt,
        canceledAt: rawNotification.canceledAt,
        createdAt: rawNotification.createdAt,
      },
      rawNotification.id,
    );
  }
}
