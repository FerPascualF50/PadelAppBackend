import { Injectable } from '@nestjs/common';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Court } from './entities/court.entity';
import { Model } from 'mongoose';

@Injectable()
export class CourtService {
  constructor(@InjectModel(Court.name) private courtModel: Model<Court>) {}

  async create(createCourtDto: CreateCourtDto): Promise<Court> {
    const createdCourt = new this.courtModel(createCourtDto);
    return await createdCourt.save();
  }

  async findAll(): Promise<Court[]> {
    const getAllCourt = await this.courtModel.find().exec();
    return getAllCourt;
  }

  async findOne(id: string): Promise<Court> {
    const getCourtById = await this.courtModel.findById(id);
    return getCourtById;
  }

  async update(id: string, updateCourtDto: UpdateCourtDto): Promise<Court> {
    const updatedCourt = await this.courtModel.findByIdAndUpdate(id, updateCourtDto,{ new: true });
    return updatedCourt;
  }

  async remove(id: string): Promise<Court> {
    const deletedCourt = await this.courtModel.findByIdAndRemove(id);
    return deletedCourt;
  }
}
