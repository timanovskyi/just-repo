import { Injectable } from '@nestjs/common';
import { CreateFoxDto } from '../models/dto/create-fox.dto';

@Injectable({})
export class FoxService {
  test() {
    console.log('34');
  }

  createFox(nweFox: CreateFoxDto) {
    console.log(nweFox);
  }
}
