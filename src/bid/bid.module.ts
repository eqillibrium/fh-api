import { Module } from '@nestjs/common';
import { BidController } from './bid.controller';

@Module({
  controllers: [BidController]
})
export class BidModule {}
