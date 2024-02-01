import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private cityModel: Model<City>) {}

  async create(createCityDto: CreateCityDto): Promise<City> {
    const createdCity = new this.cityModel(createCityDto);
    return await createdCity.save();
  }

  async findAll(): Promise<City[]> {
    const getAllCities = await this.cityModel.find().exec();
    return getAllCities;
  }

  async findOne(id: string): Promise<City> {
    const getCityById = await this.cityModel.findById(id);
    return getCityById;
  }

  async update(id: string, updateCityDto: UpdateCityDto): Promise<City> {
    const updatedCity = await this.cityModel.findByIdAndUpdate(id, updateCityDto,{ new: true });
    return updatedCity;
  }

  async remove(id: string): Promise<City> {
    const deletedCity = await this.cityModel.findByIdAndRemove(id);
    return deletedCity;
  }
}
