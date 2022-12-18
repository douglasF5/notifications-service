import { Notification } from '@app/entities/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recepientId,
      readAt: notification.createdAt,
      createdAt: notification.createdAt,
    };
  }
}