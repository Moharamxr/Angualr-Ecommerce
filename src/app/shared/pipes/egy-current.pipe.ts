import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egyCurrent',
})
export class EgyCurrentPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value} EGP`;
  }
}
