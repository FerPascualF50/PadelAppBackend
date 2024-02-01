import { Controller, Get, Post, Body, Patch, Param, Query, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { RolService } from './rol.service';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  async create(@Res() res, @Body() createRolDto: CreateRolDto) {
    try {
      const newRol = await this.rolService.create(createRolDto);
      return res.status(HttpStatus.OK).json({
        message: 'Rol Successfully Created',
        user: newRol,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllRols = await this.rolService.findAll();
    return res.status(HttpStatus.OK).json({ findAllRols });
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findRolById = await this.rolService.findOne(id);
    if (!findRolById) throw new NotFoundException('Rol Does not Exists');
    return res.status(HttpStatus.OK).json(findRolById);
  }

  @Patch('/update')
  async update(@Res() res, @Body() updateRolDto: CreateRolDto, @Query('id') id: string) {
   try {
     const updatedRol = await this.rolService.update(id, updateRolDto);
     if (!updatedRol) throw new NotFoundException('Rol Does not Exists');
     return res.status(HttpStatus.OK).json({
       message: 'Rol Successfully Updated',
       updatedRol,
     });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
   }
    
  

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedRol = await this.rolService.remove(id);
    if (!deletedRol) throw new NotFoundException('User Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Successfully',
      deletedRol,
    });
  }

}
