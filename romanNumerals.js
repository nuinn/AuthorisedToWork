// created different objects to pass through function depending on level of number.
const units = {
  ten: 'X',
  five: 'V',
  unit: 'I'
};
const tens = {
  ten: 'C',
  five: 'L',
  unit: 'X'
};
const hundreds = {
  ten: 'M',
  five: 'D',
  unit: 'C'
};
// function to convert one number to Roman numerals depending on level i.e. ones, tens, hundreds.
const convertIndividualNumbers = (num, {ten, five, unit}) =>{
  if (num == 9){
    return unit+ten;
  }
  else if (num == 4){
    return unit+five;
  }
  else{
    if (num >= 5){
      num -= 5;
      return five+unit.repeat(num);
    }
    else {
      return unit.repeat(num);
    }
  }
};
// function which splits a number (represented as a string), reverses it (in order to establish that 0 index is always units) and works backwards through it to create the full Roman numeral.
const makeRomanNumerals = str => {
  const reverseNumberArray = str.split('').reverse();
  let romanNumeral = '';
  for (let i = reverseNumberArray.length-1; i >= 0; i--) {
    const number = reverseNumberArray[i];
    if (i == 2){
      romanNumeral += convertIndividualNumbers(number,hundreds);
    }
    else if (i == 1){
      romanNumeral += convertIndividualNumbers(number,tens);
    }
    else{
      romanNumeral += convertIndividualNumbers(number,units);
    }
  }
  return romanNumeral;
};
// created a dictionary to refer to in the function to convert Roman numerals to numbers.
const romanNumeralsDictionary = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1
};
// function to convert Roman numeral strings into numbers.
const makeNumberFromRomanNumeral = str =>{
  let number = 0;
  let numberHolder; // the last number that was added.
  let numberCheck; // to run checks in case the next number is greater.
  for (const letter of str.split('')){
    numberHolder = romanNumeralsDictionary[letter];
    if (numberCheck == undefined){
      numberCheck = numberHolder;
      number += numberHolder; // this number is pushed but deleted in the case that the next number is greater.
    }
    else if (numberHolder > numberCheck){
      number += numberHolder-numberCheck*2; // numberCheck is removed from current number to represent Roman numeral logic, BUT is removed again as it was added previously to number.
      numberCheck = undefined;
    }
    else{
      number += numberHolder;
    }
  }
  return number;
};
// function which recognises both Roman numerals and numbers and converts them accordingly.
const convertRomanNumeralsAndNumbers = str => {
  isNaN(parseInt(str)) ? alert(makeNumberFromRomanNumeral(str)) : alert(makeRomanNumerals(str));
};
const input = prompt('Enter a number or a Roman numeral between 0-999:');
convertRomanNumeralsAndNumbers(input);