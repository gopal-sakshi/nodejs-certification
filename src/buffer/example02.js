/**
 * Description: Get length of string and buffer string.
 */

/** Import generics dependences */
// // import 'pretty-console-colors';

// Get length string const and lenght byte of Buffer and compare.
const str = 'Hi from NodeJS';
const str1 = Buffer.from(str);
const str2 = Buffer.byteLength(str, 'base64');                // returns the length of a specified string object, in bytes.
const str3 = Buffer.byteLength(str, 'utf8');                // returns the length of a specified string object, in bytes.

console.log(`str1 length: ${str1.length}`);
console.log(`str2 byteLength: ${str2}`);
console.log(`str3 byteLength: ${str3}`);
// Because UTF-8 uses one to three bytes to represent Unicode characters, 
    // the byte length will not be the same as the character length in general.


    