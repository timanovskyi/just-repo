import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller({
  path: 'shop',
  // host: ':name.lvh.me',
})
export class ShopController {
  constructor(private _service: ShopService) {}

  @Get()
  getItems() {
    return this._service.getItems();
  }

  onModuleInit() {
    console.log('onModuleInit');
  }

  onModuleDestroy() {
    console.log('onModuleDestroy');
  }

  onApplicationBootstrap() {
    console.log('onApplicationBootstrap');
  }

  onApplicationShutdown() {
    console.log('onApplicationShutdown');
  }

  // @Get('/test/:age')
  // // @Redirect()
  // testRedirect(@Param('age') age: number) {
  //   if (age > 10) {
  //     return {
  //       url: '/test2',
  //     };
  //   } else {
  //     return '<h1>333</h1>';
  //   }
  // }

  // @Get('/')
  // testRedirect(@HostParam('name') name: string) {
  //   return '<h1>333</h1>' + name;
  // }
}
