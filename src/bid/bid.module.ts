import { Module } from '@nestjs/common';
import { BidController } from './bid.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from '../auth/auth.model';

@Module({
  controllers: [BidController],
  imports: [
	TypegooseModule.forFeature([
		{
		typegooseClass: AuthModel,
		schemaOptions: {
			collection: 'Bid'
		}
		}
	])
  ]
})
export class BidModule {}
