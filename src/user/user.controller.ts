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
  NotFoundException,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Res() res, @Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.create(createUserDto);
      return res.status(HttpStatus.OK).json({
        message: 'User Successfully Created',
        user: newUser,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllUsers = await this.userService.findAll();
    return res.status(HttpStatus.OK).json({ findAllUsers });
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findUserById = await this.userService.findOne(id);
    if (!findUserById) throw new NotFoundException('User Does not Exists');
    return res.status(HttpStatus.OK).json(findUserById);
  }

  @Patch('/update')
  async update(@Res() res, @Body() updateUserDto: UpdateUserDto, @Query('id') id: string,) {
   try {
     const updatedUser = await this.userService.update(id, updateUserDto);
     if (!updatedUser) throw new NotFoundException('User Does not Exists');
     return res.status(HttpStatus.OK).json({
       message: 'User Successfully Updated',
       updatedUser,
     });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
   }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedUser = await this.userService.remove(id);
    if (!deletedUser) throw new NotFoundException('User Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'User Deleted Successfully',
      deletedUser,
    });
  }
}
