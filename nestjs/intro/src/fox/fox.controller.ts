import { Body, Controller, Post } from '@nestjs/common';
import { CreateFoxDto } from '../models/dto/create-fox.dto';
import { FoxService } from './fox.service';

@Controller('fox')
export class FoxController {
  constructor(private _service: FoxService) {}

  // @Get()
  // myFirstAction(
  //   @Headers('accept-encoding') encoding: string,
  //   @Ip() ip: string,
  //   @Query('name') name: string,
  //   @Req() request: Request,
  // ) {
  //   console.log(name);
  //   console.log(request);
  //   return `<h1>Your ip is ${ip}</h1>`;
  // }
  //
  // @Get('1')
  // async myFirstAction1(@Res() response: Response) {
  //   return response.send('200');
  // }
  //
  // @Get('3')
  // async myFirstAction3() {
  //   return 'allo';
  // }

  // @Get('2')
  // // @HttpCode(204)
  // // @Header('X-test', 'test')
  // // @Redirect('3')
  // myFirstAction2() {
  //   return 'hello';
  // }

  // @Get('/:name/:surname')
  // myFirstAction4(
  //   @Param('name') name: string,
  //   @Param('surname') surname: string,
  // ) {
  //   return name + surname;
  // }

  // @Get('/:id/:title?')
  // myFirstAction5(@Param('id') id: number, @Param('title') title?: string) {
  //   return id + title;
  // }

  @Post('/')
  createFox(@Body() nweFox: CreateFoxDto) {
    return this._service.createFox(nweFox);
  }
}
