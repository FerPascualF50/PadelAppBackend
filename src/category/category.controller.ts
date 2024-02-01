import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Query } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Res() res, @Body() createCategoryDto: CreateCategoryDto) {
    try {
      const newCategory = await this.categoryService.create(createCategoryDto);
      return res.status(HttpStatus.OK).json({
        message: 'Category Successfully Created',
        Category: newCategory,
      });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
  }

  @Get('/')
  async findAll(@Res() res) {
    const findAllCategorys = await this.categoryService.findAll();
    return res.status(HttpStatus.OK).json({ findAllCategorys });
  }

  @Get('/:id')
  async findOne(@Res() res, @Param('id') id) {
    const findCategoryById = await this.categoryService.findOne(id);
    if (!findCategoryById) throw new NotFoundException('Category Does not Exists');
    return res.status(HttpStatus.OK).json(findCategoryById);
  }

  @Patch('/update')
  async update(@Res() res, @Body() updateCategoryDto: UpdateCategoryDto, @Query('id') id: string,) {
   try {
     const updatedCategory = await this.categoryService.update(id, updateCategoryDto);
     if (!updatedCategory) throw new NotFoundException('Category Does not Exists');
     return res.status(HttpStatus.OK).json({
       message: 'Category Successfully Updated',
       updatedCategory,
     });
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
   }

  @Delete('/delete')
  async remove(@Res() res, @Query('id') id: string) {
    const deletedCategory = await this.categoryService.remove(id);
    if (!deletedCategory) throw new NotFoundException('Category Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'Category Deleted Successfully',
      deletedCategory,
    });
  }
}
