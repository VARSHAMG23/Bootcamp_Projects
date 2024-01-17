import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add'
})
export class AddPipe implements PipeTransform {

  transform(value_1:number,value_2:number ): number {
    return value_1 + value_2;
  }


  

}
