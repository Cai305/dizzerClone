import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbersConvertion'
})
export class NumbersConvertionPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    if (value === null) return null;  //Always returns null if no value or a Null value
    if (value === 0) return "0"; //Always returns 0 if value = 0  
    let fractionSize = 1;
    let abs = Math.abs(value);
    let rounder = Math.pow(10, fractionSize);
    let isNegative = value < 0; 
    let key = '';
    
    let symbols = [
      { key: "B", value: Math.pow(10, 9) }, //Convert a Billion number to be respresented by B
      { key: "M", value: Math.pow(10, 6) }, //Convert a Million number to be respresented by M
      { key: "k", value: 1000 }];           //Convert a Thousand number to be respresented by K

    for (let i = 0; i < symbols.length; i++) {

      let reduced = abs / symbols[i].value;

      reduced = Math.round(reduced * rounder) / rounder;

      if (reduced >= 1) {
        abs = reduced;
        key = symbols[i].key;
        break;
      }

    }
    return (isNegative ? '-' : '') + abs + key;  //Checking for all negetive values
  }

}
