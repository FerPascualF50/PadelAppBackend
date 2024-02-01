import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Res() res, @Body() createCityDto: CreateCityDto) {
    const newCity = await this.cityService.create(createCityDto);
    return res.status(HttpStatus.OK).json({
      message: 'City Successfully Created',
      city: newCity,
    });
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllCities = await this.cityService.findAll();
    return res.status(HttpStatus.OK).json({findAllCities});
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findCityById = await this.cityService.findOne(id)
    if (!findCityById) throw new NotFoundException('City Does not Exists');
    return res.status(HttpStatus.OK).json(findCityById);
  }

  @Patch('/update')
  async update(@Res() res, @Body() updateCityDto: UpdateCityDto, @Query('id') id: string) {
    const updatedCity = await this.cityService.update(id, updateCityDto);
    if(!updatedCity) throw new NotFoundException('City Does not Exists')
    return res.status(HttpStatus.OK).json({
      message : 'City Successfully Updated', 
      updatedCity})
  }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedCity = await this.cityService.remove(id)
    if (!deletedCity) throw new NotFoundException('City Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'City Deleted Successfully',
      deletedCity,
    });
  }
}
