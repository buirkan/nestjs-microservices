import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationDTO } from '../dtos/create-notification.dto';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationDTO) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      category,
      recipientId,
      content,
    });

    return { notification };
  }
}
