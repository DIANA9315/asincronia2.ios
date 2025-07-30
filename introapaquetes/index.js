const numberToText = require('number-to-text')
require('number-to-text/converters/en-us');
console.log("!Hola Mundo")
/**crear una aplicscion que conveirta un vslor numerico a texto */




let texto=numberToText.convertToText(12346);
console.log(texto); // "twelve thousand three 
// hundred forty-six"

texto=numberToText.convertToText("54321");
console.log(texto); // "fifty-four thousand three hundred twenty-one"