import { InMemoryNotificationsRepository } from '../../tests/repositories/in-memory-repository';
import { SendNotification } from './send-notification';

describe('Send notification use case', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const notificationUseCase = new SendNotification(notificationsRepository);

    await notificationUseCase.execute({
      category: 'Test',
      content: 'Test content',
      recipientId: 'example-recipientId',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
  });
});
