import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export interface CommentModel extends Base {}
export class CommentModel extends TimeStamps {
  @prop()
  name: string;
  @prop()
  text: string;
}
