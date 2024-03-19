import { forwardRef, Inject, Injectable } from '@nestjs/common';
import {
  BasketModel,
  CreatingResponseModel,
  RemovingResponseModel,
} from './models';
import { ShopService } from '../shop/shop.service';

@Injectable()
export class BasketService {
  elements: BasketModel[] = [];

  constructor(
    @Inject(forwardRef(() => ShopService)) private _shopService: ShopService,
  ) {}

  add(elem: BasketModel): CreatingResponseModel {
    if (typeof elem.name !== 'string') {
      return { isFailed: true };
    }

    const { length, push } = this.elements;
    push(elem);

    return {
      isSuccess: true,
      index: length - 1,
    };
  }

  deleteElem(index: number): RemovingResponseModel {
    const { length, slice, findIndex } = this.elements;
    const indexElem = findIndex((_, index1) => index1 === index);
    if (indexElem === -1 || index < 0 || index >= length) {
      return { isFailed: true };
    }

    slice(indexElem, 1);
    return { isSuccess: true };
  }
}
