import { Injectable } from '@nestjs/common';
import { InjectModel } from "nestjs-typegoose";
import { BidModel } from "./bid.model";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { CreateBidDto } from "./dto/create-bid.dto";

@Injectable()
export class BidService {
  constructor(@InjectModel(BidModel) private readonly bidModel: ModelType<BidModel>) {}

  async create(dto: CreateBidDto) {
    return this.bidModel.create(dto)
  }

  async fetchAll() {
    return this.bidModel.find()
  }
}
