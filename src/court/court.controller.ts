import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { CourtService } from './court.service';
import { CreateCourtDto } from './dto/create-court.dto';
import { UpdateCourtDto } from './dto/update-court.dto';

@Controller('court')
export class CourtController {
  constructor(private readonly courtService: CourtService) {}

  @Post()
  async create(@Res() res, @Body() createCourtDto: CreateCourtDto) {
    try {
      const newCourt = await this.courtService.create(createCourtDto);
      return res.status(HttpStatus.OK).json({
        message: 'Court Successfully Created',
        court: newCourt,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllCourts = await this.courtService.findAll();
    return res.status(HttpStatus.OK).json({ findAllCourts });
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findCourtById = await this.courtService.findOne(id);
    if (!findCourtById) throw new NotFoundException('Court Does not Exists');
    return res.status(HttpStatus.OK).json(findCourtById);
  }

  @Patch('/update')
  async update(@Res() res, @Body() updateCourtDto: UpdateCourtDto, @Query('id') id: string) {
   try {
     const updatedCourt = await this.courtService.update(id, updateCourtDto);
     if (!updatedCourt) throw new NotFoundException('Court Does not Exists');
     return res.status(HttpStatus.OK).json({
       message: 'Court Successfully Updated',
       updatedCourt,
     });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
   }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedCourt = await this.courtService.remove(id);
    if (!deletedCourt) throw new NotFoundException('Court Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'Court Deleted Successfully',
      deletedCourt,
    });
  }
}
