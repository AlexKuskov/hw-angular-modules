import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'censor'
})
export class CensorPipe implements PipeTransform {

  forbiddenWords: string[] = ['donkey', 'cock', 'sucker'];

  transform(value: string): string {
    this.forbiddenWords.forEach(word => {
      const wordPattern = new RegExp(word, "g");

      value = value.replace(wordPattern, this.generateAsterisks(word));
    });

    return value;
  }

  generateAsterisks(word: string): string {
    return word.replace(/./g, '*');
  }
}
