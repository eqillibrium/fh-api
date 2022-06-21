import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { CommentService } from './comment.service';
import { CommentModel } from './comment.model';

@Module({
  controllers: [CommentController],
  imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: CommentModel,
				schemaOptions: {
					collection: 'Auth'
				}
			}
		])
  ],
  providers: [CommentService]
})
export class CommentModule {}
