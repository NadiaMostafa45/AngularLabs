import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number = 10): number {
    if (!price || price <= 0) {
      return 0;
    }
    price = price - (price * discount) / 100;

    return price;
  }
}
