import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notification-repositories';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
