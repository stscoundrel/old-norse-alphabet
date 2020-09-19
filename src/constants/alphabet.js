// Case variations.
const LOWER_CASE = ['a', 'á', 'b', 'd', 'ð', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'w', 'y', 'ý', 'þ', 'æ', 'ǫ', 'ø', 'œ']
const UPPER_CASE = ['A', 'Á', 'B', 'D', 'Ð', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'P', 'R', 'S', 'T', 'U', 'Ú', 'V', 'W', 'Y', 'Ý', 'Þ', 'Æ', 'Ǫ', 'Ø', 'Œ']

// Combined alphabet.
const ALPHABET = [...LOWER_CASE, ...UPPER_CASE]

// Letters valid as first characters of a word.
const VALID_AS_FIRST = ['a', 'á', 'b', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'w', 'y', 'ý', 'þ', 'æ', 'ǫ', 'ø', 'œ']

// "Special" letters.
const ETH = 'ð'
const THORN = 'þ'
const O_CAUDATA = 'ǫ'
const ASH = 'æ'
const SLASHED_O = 'Ø'
const OE = 'œ'

module.exports = {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
  VALID_AS_FIRST,
  ETH,
  THORN,
  O_CAUDATA,
  ASH,
  SLASHED_O,
  OE,
}
