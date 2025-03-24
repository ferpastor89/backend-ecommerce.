import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController], // Registra el controlador de productos
  providers: [ProductService], // Registra el servicio de productos
})
export class ProductModule {}
