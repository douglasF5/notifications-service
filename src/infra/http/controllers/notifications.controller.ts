import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, recipientId, category } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      recipientId,
      category,
    });

    return { notification: NotificationViewModel.toHttp(notification) };
  }
}
