import { Injectable } from '@nestjs/common';
import { CommentModel } from './comment.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class CommentService {
  constructor(@InjectModel(CommentModel) private readonly commentModel: ModelType<CommentModel>) {}

  async create(dto: CreateCommentDto) {
    return this.commentModel.create(dto);
  }

  async delete(id: string): Promise<DocumentType<CommentModel> | null> {
    return this.commentModel.findByIdAndDelete(id).exec();
  }

  async findByBidId(bidId: string): Promise<DocumentType<CommentModel>[]> {
    return this.commentModel.find({ bidId: new Types.ObjectId(bidId) }).exec();
  }

  async deleteByBidId(bidId: string) {
    return this.commentModel.deleteMany({ bidId: new Types.ObjectId(bidId) }).exec();
  }
}
