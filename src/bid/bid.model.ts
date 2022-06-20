import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { prop } from '@typegoose/typegoose';

export enum AnimalType {
  Dog,
  Cat,
}

export enum BidStatus {
  Free,
  InProgress,
  Completed,
  Cancelled
}

export interface BidModel extends Base {}
export class BidModel extends TimeStamps {

  @prop()
  image: string;

  @prop()
  title: string;

  @prop({ enum: AnimalType })
  animalType: AnimalType;

  @prop()
  description: string;

  @prop()
  award: number;

  @prop()
  address: string;

  @prop({ enum: BidStatus })
  status: BidStatus;

  @prop()
  helper?: string;

  @prop({ type: () => [String]})
  contributors?: string[];
}
