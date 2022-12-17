import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repositories';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async findById(notificaitonId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification): Promise<void> {
    const rawData = PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: rawData,
    });
  }

  async save(notificaitonId: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
