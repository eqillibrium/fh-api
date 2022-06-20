import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModel } from '../auth/auth.model';

@Module({
  controllers: [CommentController],
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
export class CommentModule {}
