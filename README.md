# Old Norse Alphabet

Old Norse alphabet alphabet constants for JS.

### Motivation

Old Norse constains letters that may be hard to type with most keyboards. Prime examples being þ, ð and ǫ. There are also some letters "missing", like c and q. This package offers the alphabet & tricky individual letters as JS constants.


### Install

`npm install old-norse-alphabet`

### Usage


Letter lists:

```javascript
const {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
  VALID_AS_FIRST,
} = require('old-norse-alphabet')

console.log(LOWER_CASE)
// ['a', 'á', 'b', 'd', 'ð', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'w', 'y', 'ý', 'þ', 'æ', 'ǫ', 'ø', 'œ']

console.log(UPPER_CASE)
//['A', 'Á', 'B', 'D', 'Ð', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'P', 'R', 'S', 'T', 'U', 'Ú', 'V', 'W', 'Y', 'Ý', 'Þ', 'Æ', 'Ǫ', 'Ø', 'Œ']

// Not all letters are valid as first letters.
console.log(VALID_AS_FIRST) // wont have ð

console.log(ALPHABET) // combined upper & lower case.

```

Individual tricky characters:

```javascript
const {
  ETH,
  THORN,
  O_CAUDATA,
  ASH,
  SLASHED_O,
  OE,
  AE,
} = require('old-norse-alphabet')

console.log(ETH) // ð
console.log(THORN) // þ
console.log(O_CAUDATA) // ǫ
console.log(ASH) // æ
console.log(SLASHED_O) // ø
console.log(OE) // œ
console.log(AE) // Same as ASH, æ

```

### About Old Norse

[Old Norse](https://en.wikipedia.org/wiki/Old_Norse) was a North Germanic language that was spoken by inhabitants of Scandinavia and their overseas settlements from about the 7th to the 15th centuries.
