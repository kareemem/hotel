import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(desc:[string] , limit:number): string {
    return desc.slice(0,limit).join(' , ');
  }
}
