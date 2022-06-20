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

export class BidModel {
  _id: string
  image: string;
  title: string;
  animalType: AnimalType;
  description: string;
  award: number;
  address: string;
  status: BidStatus;
  helper?: string | null;
  contributors?: string[];
}
