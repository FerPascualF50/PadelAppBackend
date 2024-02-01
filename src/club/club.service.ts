import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Club } from './entities/club.entity';
import { Model } from 'mongoose';

@Injectable()
export class ClubService {
  constructor(@InjectModel(Club.name) private clubModel: Model<Club>) {}

  async create(createClubDto: CreateClubDto): Promise<Club> {
    const createdClub = new this.clubModel(createClubDto);
    return await createdClub.save();
  }

  async findAll(): Promise<Club[]> {
    const getAllClub = await this.clubModel.find().exec();
    return getAllClub;
  }

  async findOne(id: string): Promise<Club> {
    const getClubById = await this.clubModel.findById(id);
    return getClubById;
  }

  async update(id: string, updateClubDto: UpdateClubDto): Promise<Club> {
    const updatedClub = await this.clubModel.findByIdAndUpdate(id, updateClubDto,{ new: true });
    return updatedClub;
  }

  async remove(id: string): Promise<Club> {
    const deletedClub = await this.clubModel.findByIdAndRemove(id);
    return deletedClub;
  }
}
