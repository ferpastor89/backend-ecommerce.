import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';  // Asegúrate de importar ProductModule
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ProductModule],  // Aquí agregamos ProductModule
  controllers: [AppController],  // AppController debe manejar solo / y no /products
  providers: [AppService],
})
export class AppModule {}
