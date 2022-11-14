import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'songname'
})
export class SongnamePipe implements PipeTransform {

  transform(value: string): unknown {
    let songTitle;
    songTitle = value.substring(0, 10);
    return songTitle;
  }

}
