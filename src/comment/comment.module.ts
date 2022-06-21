import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from '../auth/auth.model';
import { CommentService } from './comment.service';

@Module({
  controllers: [CommentController],
  imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: AuthModel,
				schemaOptions: {
					collection: 'Auth'
				}
			}
		])
  ],
  providers: [CommentService]
})
export class CommentModule {}
