import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Post()
  async create(@Res() res, @Body() createClubrDto: CreateClubDto) {
    const newClub = await this.clubService.create(createClubrDto);
    return res.status(HttpStatus.OK).json({
      message: 'Club Successfully Created',
      club: newClub,
    });
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllClubs = await this.clubService.findAll();
    return res.status(HttpStatus.OK).json({findAllClubs});
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findClubById = await this.clubService.findOne(id)
    if (!findClubById) throw new NotFoundException('Club Does not Exists');
    return res.status(HttpStatus.OK).json(findClubById);
  }

  @Patch('/update')
  async update(@Res() res, @Body() updateClubDto: UpdateClubDto, @Query('id') id: string) {
    const updatedClub = await this.clubService.update(id, updateClubDto);
    if(!updatedClub) throw new NotFoundException('Club Does not Exists')
    return res.status(HttpStatus.OK).json({
      message : 'Club Successfully Updated', 
      updatedClub})
  }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedClub = await this.clubService.remove(id)
    if (!deletedClub) throw new NotFoundException('Club Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'Club Deleted Successfully',
      deletedClub,
    });
  }
}
