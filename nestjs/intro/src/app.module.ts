import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FoxController } from './fox/fox.controller';
import { FoxService } from './fox/fox.service';
import { ShopModule } from './shop/shop.module';
import { BasketModule } from './basket/basket.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), ShopModule, BasketModule],
  controllers: [AppController, FoxController],
  providers: [AppService, FoxService],
})
export class AppModule {}
