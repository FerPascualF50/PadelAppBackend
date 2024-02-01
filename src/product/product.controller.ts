import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Param,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async createPost(@Res() res, @Body() createProductDto: CreateProductDto) {
    const product = await this.productService.createProduct(createProductDto);
    return res.status(HttpStatus.OK).json({
      message: 'Product Successfully Created ',
      product: product,
    });
  }

  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json({
      products,
    });
  }

  @Get('/:productID')
  async getproduct(@Res() res, @Param('productID') productID) {
    const product = await this.productService.getProduct(productID);
    if (!product) throw new NotFoundException('Product Does not Exists');
    return res.status(HttpStatus.OK).json(product);
  }

  @Put('/update')
  async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDto, @Query('productID') productID){
    const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
    if (!updatedProduct) throw new NotFoundException('Product Does not Exists');
    return res.status(HttpStatus.OK).json({
      message: 'Product Updated Successfully',
      updatedProduct,
    })
  }
  
  // @Delete('/delete')
  // async deleteProduct(@Res() res, @Query('productID') productID) {
  //   const productDeleted = await this.productService.deletedProduct(productID);
  //   if (!productDeleted) throw new NotFoundException('Product Does not Exists');
  //   return res.status(HttpStatus.OK).json({
  //     message: 'Product Deleted Successfully',
  //     productDeleted,
  //   });
  // }
}
