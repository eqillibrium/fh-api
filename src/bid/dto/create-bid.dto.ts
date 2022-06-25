import { AnimalType, BidStatus } from '../bid.model';
import { IsString, MaxLength, MinLength, IsNumber, IsEnum } from 'class-validator';

export class CreateBidDto {
  @IsString()
  image: string;

  @MaxLength(25)
  @MinLength(5)
  @IsString()
  title: string;

  @IsEnum(AnimalType)
  animalType: AnimalType;

  @MaxLength(35)
  @MinLength(5)
  @IsString()
  description: string;

  @IsNumber()
  award: number;

  @IsString()
  address: string;

  @IsString()
  author: string;

  @IsEnum(BidStatus)
  status: BidStatus;
}
