import { Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rol } from './entities/rol.entity';
import { Model } from 'mongoose';

@Injectable()
export class RolService {
  constructor(@InjectModel(Rol.name) private cityModel: Model<Rol>) {}

  async create(createRolDto: CreateRolDto): Promise<Rol> {
    const createdRol = new this.cityModel(createRolDto);
    return await createdRol.save();
  }

  async findAll(): Promise<Rol[]> {
    const getAllRol = await this.cityModel.find().exec();
    return getAllRol;
  }

  async findOne(id: string): Promise<Rol> {
    const getRolById = await this.cityModel.findById(id);
    return getRolById;
  }

  async update(id: string, updateRolDto: UpdateRolDto): Promise<Rol> {
    const updatedRol = await this.cityModel.findByIdAndUpdate(id, updateRolDto,{ new: true });
    return updatedRol;
  }

  async remove(id: string): Promise<Rol> {
    const deletedRol = await this.cityModel.findByIdAndRemove(id);
    return deletedRol;
  }
}
