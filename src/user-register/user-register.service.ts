import { Injectable } from '@nestjs/common';
import { CreateUserRegisterDto } from './dto/create-user-register.dto';
import { UpdateUserRegisterDto } from './dto/update-user-register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserRegister } from './entities/user-register.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserRegisterService {
  constructor(@InjectModel(UserRegister.name) private userRegisterModel: Model<UserRegister>) {}

  async create(createUserRegisterDto: CreateUserRegisterDto): Promise<UserRegister> {
    const createdUserRegister = new this.userRegisterModel(createUserRegisterDto);
    return await createdUserRegister.save();
  }

  async findAll(): Promise<UserRegister[]> {
    const getAllUserRegister = await this.userRegisterModel.find().exec();
    return getAllUserRegister;
  }

  async findOne(id: string): Promise<UserRegister> {
    const getUserRegisterById = await this.userRegisterModel.findById(id);
    return getUserRegisterById;
  }

  // async update(id: string, updateUserRegisterDto: UpdateUserRegisterDto): Promise<UserRegister> {
  //   const updatedUserRegister = await this.userRegisterModel.findByIdAndUpdate(id, updateUserRegisterDto,{ new: true });
  //   return updatedUserRegister;
  // }

  async remove(id: string): Promise<UserRegister> {
    const deletedUserRegister = await this.userRegisterModel.findByIdAndRemove(id);
    return deletedUserRegister;
  }
}
