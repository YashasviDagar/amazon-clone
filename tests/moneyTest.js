import {formatCurrency} from '../scripts/utils/money.js';
//WITHOUT JASMINE AND MANUAL METHODS
console.log('test suite: formatCurrency')

console.log('converts cents into dollars')

if(formatCurrency(2095) === '20.95'){
    console.log('passed');
}else{
    console.log('failed');//base case
}

console.log('works with zero');

if(formatCurrency(0) === '0.00'){
    console.log('passed');
}else{
    console.log('failed');
}//edge cases

console.log('rounding to the nearest cents .5')

if(formatCurrency(2000.5) === '20.01'){
    console.log('passed');
}else{
    console.log('failed');
}

console.log('rounds with .4')

if(formatCurrency(2000.4) === '20.00'){
    console.log('passed');
}else{
    console.log('failed');
}