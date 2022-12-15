import { Content } from './content';

describe('Notification Content', () => {
  it('should be able to create notification content', () => {
    const content = new Content('You received a notification');
    expect(content).toBeTruthy();
  });

  it('should not be able to create notification content with less than 5 characters', () => {
    expect(() => new Content('Abc')).toThrow();
  });

  it('should not be able to create notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
