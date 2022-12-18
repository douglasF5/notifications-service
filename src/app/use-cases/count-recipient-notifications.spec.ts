import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  // TEST COUNTING RECIPIENT NOTIFICATIONS
  it('Should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('New connection invitation!'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('New connection invitation!'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('New connection invitation!'),
        category: 'social',
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    console.log(count);

    expect(count).toEqual(2);
  });

  // // TEST COUNTING RECIPIENT NOTIFICATIONS WHEN THERE'S NOTHING TO BE COUNTED
  // it('Should return 0 when there are no notifications to be counted', async () => {
  //   const notificationsRepository = new InMemoryNotificationsRepository();
  //   const countRecipientNotifications = new CountRecipientNotifications(
  //     notificationsRepository,
  //   );

  //   const { count } = await countRecipientNotifications.execute({
  //     recipientId: 'recipient-1',
  //   });

  //   expect(count).toEqual(0);
  // });
});
