export class Content {
  private readonly _content: string;

  private validateContentLength(content: string) {
    return content.length >= 5 && content.length <= 240;
  }

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error(
        'Content length must be greater than 5 and less than 240',
      );
    }
    this._content = content;
  }

  get value(): string {
    return this._content;
  }
}
