import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto'; // ✅ DTO correcto

@Injectable()
export class ProductService {
  private products: CreateProductDto[] = [];  // ✅ Arreglo de productos

  create(createProductDto: CreateProductDto) {
    this.products.push(createProductDto);  // Agregar producto al arreglo
    return createProductDto;  // Retornar producto agregado
  }

  findAll() {
    return this.products;  // Retornar todos los productos
  }
}
