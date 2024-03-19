import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import {
  BasketModel,
  CreatingResponseModel,
  RemovingResponseModel,
} from './models';
import { BasketService } from './basket.service';

@Controller('basket')
export class BasketController {
  constructor(private _service: BasketService) {}

  @Post('/')
  addElement(@Body() elem: BasketModel): CreatingResponseModel {
    return this._service.add(elem);
  }

  @Delete('/:index')
  deleteElem(@Param('index') index: string): RemovingResponseModel {
    return this._service.deleteElem(+index);
  }
}
