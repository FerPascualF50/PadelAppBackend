import { Injectable } from '@nestjs/common';
import { CreateTourmentDto } from './dto/create-tourment.dto';
import { UpdateTourmentDto } from './dto/update-tourment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tourment } from './entities/tourment.entity';
import { Model } from 'mongoose';

@Injectable()
export class TourmentService {
  constructor(@InjectModel(Tourment.name) private tourmentModel: Model<Tourment>) {}

  async create(createTourmentDto: CreateTourmentDto): Promise<Tourment> {
    const createdTourment = new this.tourmentModel(createTourmentDto);
    return await createdTourment.save();
  }

  async findAll(): Promise<Tourment[]> {
    const getAllTourment = await this.tourmentModel.find().exec();
    return getAllTourment;
  }

  async findOne(id: string): Promise<Tourment> {
    const getTourmentById = await this.tourmentModel.findById(id);
    return getTourmentById;
  }

  async update(id: string, updateTourmentDto: UpdateTourmentDto): Promise<Tourment> {
    const updatedTourment = await this.tourmentModel.findByIdAndUpdate(id, updateTourmentDto,{ new: true });
    return updatedTourment;
  }

  async remove(id: string): Promise<Tourment> {
    const deletedTourment = await this.tourmentModel.findByIdAndRemove(id);
    return deletedTourment;
  }
}
