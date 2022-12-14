import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification, PrismaPromise } from '@prisma/client';
import { randomUUID } from 'crypto';
import { NotificationDTO } from './notification.dto';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list(): PrismaPromise<Notification[]> {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: NotificationDTO) {
    const { recipientId, content, category } = body;
    return await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
