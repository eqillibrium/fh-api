import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PageModule } from './page/page.module';
import { BidModule } from './bid/bid.module';
import { CommentModule } from './comment/comment.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from './config/mongo.config';

@Module({
  imports: [
	ConfigModule.forRoot(),
	TypegooseModule.forRootAsync({
		imports: [ConfigModule],
		inject: [ConfigService],
		useFactory: getMongoConfig
	}),
	AuthModule,
	PageModule,
	BidModule,
	CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
