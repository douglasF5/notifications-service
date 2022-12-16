import { Content } from './content';
import { Notification } from './notification';

describe('Testing Notification', () => {
  it('should be able to create notification content', () => {
    const notification = new Notification({
      content: new Content('New connection invitation!'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
