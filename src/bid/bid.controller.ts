import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { BidModel } from './bid.model';
import { FindBidDto } from './dto/find-bid.dto';
import { BidService } from "./bid.service";
import { CreateBidDto } from "./dto/create-bid.dto";
import { JwtGuard } from "../auth/guards/jwt.guard";

@Controller('bid')
export class BidController {
  constructor(private readonly bidService: BidService) {}

  @Post('create')
  @UsePipes(new ValidationPipe())
  @UseGuards(JwtGuard)
  async create(@Body() dto: CreateBidDto) {
    return this.bidService.create(dto)
  }

  @Get('/fetch')
  async fetchAll() {
    return this.bidService.fetchAll()
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
