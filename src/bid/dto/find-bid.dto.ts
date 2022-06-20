import { AnimalType, BidStatus } from '../bid.model';

export class FindBidDto {
  animalType: AnimalType;
  bidStatus?: BidStatus;
  limit: number;
}
