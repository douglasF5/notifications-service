import { Content } from './content';
import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface NotificationProps {
  recipientId: string;
  createdAt: Date;
  readAt?: Date | null;
  canceledAt?: Date | null;
  category: string;
  content: Content;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<
      NotificationProps,
      {
        createdAt?: Date;
      }
    >,
  ) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // GET ID
  public get id(): string {
    return this._id;
  }

  // GET AND SET RECEPIENT ID
  public get recepientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  // GET CREATED DATE
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  // GET AND SET READ TIME
  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }

  public get readAt(): Date | undefined | null {
    return this.props.readAt;
  }

  // GET AND SET CANCELED TIME
  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | undefined | null {
    return this.props.canceledAt;
  }

  // GET AND SET CATEGORY
  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  // GET AND SET CONTENT
  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }
}
