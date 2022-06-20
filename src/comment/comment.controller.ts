import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentModel } from './comment.model';

@Controller('comment')
export class CommentController {

  @Post('create')
  async create(@Body() dto: Omit<CommentModel, '_id'>) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Get('byBid/:bidId')
  async getByBid(@Param('id') bidId: string) {

  }
}
