import { Content } from './content';
import { Replace } from 'src/helpers/Replace';

export interface NotificationProps {
  recipientId: string;
  createdAt: Date;
  readAt?: Date | null;
  category: string;
  content: Content;
}

export class Notification {
  private props: NotificationProps;

  constructor(
    props: Replace<
      NotificationProps,
      {
        createdAt?: Date;
      }
    >,
  ) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  // GET AND SET RECEPIENT ID
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recepientId(): string {
    return this.props.recipientId;
  }

  // GET AND SET CREATED DATE
  public get createdAt(): Date {
    return this.props.createdAt;
  }

  // GET AND SET READ TIME
  public set readAt(readAt: Date | undefined | null) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | undefined | null {
    return this.props.readAt;
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
