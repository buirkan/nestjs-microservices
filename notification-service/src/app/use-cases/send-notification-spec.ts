import { SendNotification } from './send-notification';

describe('Send notification use case', () => {
  it('should be able to send notification', async () => {
    const notificationUseCase = new SendNotification();

    const { notification } = await notificationUseCase.execute({
      category: 'Test',
      content: 'Test content',
      recipientId: 'example-recipientId',
    });

    expect(notification).toBeTruthy();
  });
});
