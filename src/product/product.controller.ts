import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/product.dto'; // ✅ Importación correcta del DTO

@Controller('products')  // Asegúrate de que la ruta sea 'products'
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {  // ✅ Crear producto
    return this.productService.create(createProductDto);
  }

  @Get()
  getProducts() {  // ✅ Obtener productos
    return this.productService.findAll();
  }
}
