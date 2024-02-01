import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { UserRegisterService } from './user-register.service';
import { CreateUserRegisterDto } from './dto/create-user-register.dto';
import { UpdateUserRegisterDto } from './dto/update-user-register.dto';

@Controller('user-register')
export class UserRegisterController {
  constructor(private readonly userRegisterService: UserRegisterService) {}

  @Post()
  async create(@Res() res, @Body() createUserRegisterDto: CreateUserRegisterDto) {
    try {
      const newUserRegister = await this.userRegisterService.create(createUserRegisterDto);
      return res.status(HttpStatus.OK).json({
        message: 'UserRegister Successfully Created',
        user: newUserRegister,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllUserRegisters = await this.userRegisterService.findAll();
    return res.status(HttpStatus.OK).json({ findAllUserRegisters });
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findUserRegisterById = await this.userRegisterService.findOne(id);
    if (!findUserRegisterById) throw new NotFoundException('UserRegister Does not Exists');
    return res.status(HttpStatus.OK).json(findUserRegisterById);
  }

  // @Patch('/update')
  // async update(@Res() res, @Body() updateUserRegisterDto: UpdateUserRegisterDto, @Query('id') id: string) {
  //  try {
  //    const updatedUserRegister = await this.userRegisterService.update(id, updateUserRegisterDto);
  //    if (!updatedUserRegister) throw new NotFoundException('UserRegister Does not Exists');
  //    return res.status(HttpStatus.OK).json({
  //      message: 'UserRegister Successfully Updated',
  //      updatedUserRegister,
  //    });
  //   } catch (error) {
  //     return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
  //   }
  //  }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedUserRegister = await this.userRegisterService.remove(id);
    if (!deletedUserRegister) throw new NotFoundException('UserRegister Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'UserRegister Deleted Successfully',
      deletedUserRegister,
    });
  }
}
