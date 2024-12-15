import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textToIcon',
  standalone: true
})
export class TextToIconPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'tired':
        return '🥱'
      case 'want to sleep':
        return '😴'
      case 'Love':
        return '😘'
      case 'happy':
        return '😊'
      case 'sad':
        return '😒'
      case 'excited':
        return '😂'
      case 'angry':
        return '😠'
      default:
        return '🤷‍♀️'
    }
  }
}
