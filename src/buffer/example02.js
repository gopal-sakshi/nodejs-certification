/**
 * Description: Get length of string and buffer string.
 */

/** Import generics dependences */
import 'pretty-console-colors';

// Get length string const and lenght byte of Buffer and compare.
const str = 'Hi from NodeJS';
const str1 = Buffer.from(str);
const str2 = Buffer.byteLength(str);
console.log(`str: ${str}`);
console.log(`str length: ${str.length}`);
console.log(`str1 lenght: ${str1.length}`);
console.log(`str2 byteLength: ${str2}`);
// Because UTF-8 uses one to three bytes to represent Unicode characters, 
    // the byte length will not be the same as the character length in general.


    