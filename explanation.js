document.body.innerHTML = atob("/AAAAAPwAAAAA+AAAAAD4eD/h//H4P8H/9/g/wf/3+D/D///4f8P///h/w///+H/D///wf4P///B/g///8P+D///w/4P//+D/g///wP+D///B/4P8/4D/gfz/Af/AAP4D/8AB/gP/4AP+B//wB8=") // huge base64 string contains actual data. Stored in binary, which is inverted.
  .split('') // split the raw text into chars
  .map(x => x.charCodeAt(0) // get the first byte of each character
    .toString(2) // convert it into binary
    .padStart(8) // force it to be 8 digits long
    .split('') // split each 8-digit byte into bits.
    .map(x => "# ".charAt(x)) // map each bit into a on (#) or off ( ) character. Because the data is inverted, we invert it once again
    .join('')) // merge the bytes
  .join('') // merge all of the bytes into a long string
  .match(/.{40}/g) // split the long string into 40 character chunks
  .map(x => '<pre style="margin: 0">' + x + '</pre>') // surround each chunk with a <pre> tag, with margin set to 0
  .join(''); // join into a long line of HTML, which parses correctly into ascii art PI.


////////////////////////////////////
// Data stored in the Base64 string.
// Hex:
//
// fc 00 00 00 03 
// f0 00 00 00 03 
// e0 00 00 00 03 
// e1 e0 ff 87 ff 
// c7 e0 ff 07 ff 
// df e0 ff 07 ff 
// df e0 ff 0f ff 
// ff e1 ff 0f ff 
// ff e1 ff 0f ff 
// ff e1 ff 0f ff 
// ff c1 fe 0f ff 
// ff c1 fe 0f ff 
// ff c3 fe 0f ff 
// ff c3 fe 0f ff 
// ff 83 fe 0f ff 
// ff 03 fe 0f ff 
// ff 07 fe 0f f3 
// fe 03 fe 07 f3 
// fc 07 ff 00 03 
// f8 0f ff 00 07 
// f8 0f ff 80 0f
// f8 1f ff c0 1f
//
// Bin:
//
// 11111100 00000000 00000000 00000000 00000011 
// 11110000 00000000 00000000 00000000 00000011 
// 11100000 00000000 00000000 00000000 00000011 
// 11100001 11100000 11111111 10000111 11111111 
// 11000111 11100000 11111111 00000111 11111111 
// 11011111 11100000 11111111 00000111 11111111 
// 11011111 11100000 11111111 00001111 11111111 
// 11111111 11100001 11111111 00001111 11111111 
// 11111111 11100001 11111111 00001111 11111111 
// 11111111 11100001 11111111 00001111 11111111 
// 11111111 11000001 11111110 00001111 11111111 
// 11111111 11000001 11111110 00001111 11111111 
// 11111111 11000011 11111110 00001111 11111111 
// 11111111 11000011 11111110 00001111 11111111 
// 11111111 10000011 11111110 00001111 11111111 
// 11111111 00000011 11111110 00001111 11111111 
// 11111111 00000111 11111110 00001111 11110011 
// 11111110 00000011 11111110 00000111 11110011 
// 11111100 00000111 11111111 00000000 00000011 
// 11111000 00001111 11111111 00000000 00000111 
// 11111000 00001111 11111111 10000000 00001111 
// 11111000 00011111 11111111 11000000 00011111
