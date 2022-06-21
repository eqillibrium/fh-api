import {
	Body,
	Controller,
	Delete,
	Get,
	HttpException,
	HttpStatus,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentService } from './comment.service';
import { COMMENT_NOT_FOUND } from './comment.constants';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

	@UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateCommentDto) {
		return this.commentService.create(dto);
  }

	@UseGuards(JwtGuard)
  @Delete(':id')
  async delete(@Param('id') id: string) {
		const deletedComment = await this.commentService.delete(id);
		if (!deletedComment) {
			throw new HttpException(COMMENT_NOT_FOUND(id), HttpStatus.NOT_FOUND);
		}
  }

  @Get('byBid/:bidId')
  async getByBid(@Param('id') bidId: string) {
		return this.commentService.findByBidId(bidId);
  }
}
