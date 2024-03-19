import { Injectable } from '@nestjs/common';

@Injectable()
export class ShopService {
  readonly elements = [
    { name: 'string', description: 'tets', amount: 123 },
    { name: 'string', description: 'tets', amount: 123 },
    { name: 'string', description: 'tets', amount: 123 },
  ];

  getItems() {
    return this.elements;
  }
}
