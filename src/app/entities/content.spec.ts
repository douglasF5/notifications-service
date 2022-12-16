import { Content } from './content';

describe('Testing notification content', () => {
  // CREATE NOTIFICATION CONTENT
  it('should be able to create notification content', () => {
    const content = new Content('New connection invitation!');

    expect(content).toBeTruthy();
  });

  // THROW ERROR WHNE CONTENT IS LESS THAN 5 CHARACHTERS LONG
  it('should not be able to create notification content with less than 5 characters', () => {
    expect(() => new Content('Hi!')).toThrow();
  });

  // THROW ERROR WHNE CONTENT IS MORE THAN 240 CHARACHTERS LONG
  it('should not be able to create notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
