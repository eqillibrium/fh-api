import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { BidModel } from './bid.model';
import { FindBidDto } from './dto/find-bid.dto';

@Controller('bid')
export class BidController {

  @Post('create')
  async create(@Body() dto: Omit<BidModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Patch(':id')
  async patch(@Param('id') id: string, @Body() dto: BidModel) {

  }

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindBidDto) {

  }
}
