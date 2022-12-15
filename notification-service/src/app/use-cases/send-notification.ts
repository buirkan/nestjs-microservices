import { Content } from '../entities/notification/content';
import { Notification } from '../entities/notification/notification';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      content: new Content(content),
      recipientId,
      category,
    });

    return { notification };
  }
}
