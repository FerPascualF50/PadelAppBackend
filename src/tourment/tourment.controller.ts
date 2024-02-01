import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { TourmentService } from './tourment.service';
import { CreateTourmentDto } from './dto/create-tourment.dto';
import { UpdateTourmentDto } from './dto/update-tourment.dto';

@Controller('tourment')
export class TourmentController {
  constructor(private readonly tourmentService: TourmentService) {}

  @Post()
  async create(@Res() res, @Body() createTourmentDto: CreateTourmentDto) {
    try {
      const newTourment = await this.tourmentService.create(createTourmentDto);
      return res.status(HttpStatus.OK).json({
        message: 'Tourment Successfully Created',
        user: newTourment,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllTourments = await this.tourmentService.findAll();
    return res.status(HttpStatus.OK).json({ findAllTourments });
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findTourmentById = await this.tourmentService.findOne(id);
    if (!findTourmentById) throw new NotFoundException('Tourment Does not Exists');
    return res.status(HttpStatus.OK).json(findTourmentById);
  }

  @Patch('/update')
  async update(@Res() res, @Body() updateTourmentDto: UpdateTourmentDto, @Query('id') id: string) {
   try {
     const updatedTourment = await this.tourmentService.update(id, updateTourmentDto);
     if (!updatedTourment) throw new NotFoundException('Tourment Does not Exists');
     return res.status(HttpStatus.OK).json({
       message: 'Tourment Successfully Updated',
       updatedTourment,
     });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
   }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedTourment = await this.tourmentService.remove(id);
    if (!deletedTourment) throw new NotFoundException('Tourment Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'Tourment Deleted Successfully',
      deletedTourment,
    });
  }
}
