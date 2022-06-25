import { Module } from '@nestjs/common';
import { BidController } from './bid.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { BidModel } from './bid.model';
import { BidService } from './bid.service';

@Module({
  controllers: [BidController],
  imports: [
	TypegooseModule.forFeature([
		{
		typegooseClass: BidModel,
		schemaOptions: {
			collection: 'Bid'
		}
		}
	])
  ],
  providers: [BidService]
})
export class BidModule {}
