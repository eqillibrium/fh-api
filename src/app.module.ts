import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';
import { BidModule } from './bid/bid.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [AuthModule, PageModule, BidModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
