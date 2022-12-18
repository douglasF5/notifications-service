import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  const newNotification = new Notification({
    content: new Content('New connection invitation!'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });

  return newNotification;
}
