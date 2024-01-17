import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'string'
})
export class StringPipe implements PipeTransform {

    
  transform(value_1:string,value_2:string ): string {
    return value_1 + value_2;
  }
}
