// Case variations.
export const LOWER_CASE: string[] = ['a', 'á', 'b', 'd', 'ð', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'w', 'y', 'ý', 'þ', 'æ', 'ǫ', 'ø', 'œ'];
export const UPPER_CASE: string[] = ['A', 'Á', 'B', 'D', 'Ð', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 'N', 'O', 'Ó', 'P', 'R', 'S', 'T', 'U', 'Ú', 'V', 'W', 'Y', 'Ý', 'Þ', 'Æ', 'Ǫ', 'Ø', 'Œ'];

// Combined alphabet.
export const ALPHABET: string[] = [...LOWER_CASE, ...UPPER_CASE];

// Letters valid as first characters of a word.
export const VALID_AS_FIRST: string[] = ['a', 'á', 'b', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm', 'n', 'o', 'ó', 'p', 'r', 's', 't', 'u', 'ú', 'v', 'y', 'ý', 'þ', 'æ', 'ǫ', 'ø', 'œ'];

// "Special" letters.
export const ETH = 'ð';
export const THORN = 'þ';
export const O_CAUDATA = 'ǫ';
export const ASH = 'æ';
export const SLASHED_O = 'Ø';
export const OE = 'œ';
export const AE = ASH;

export default {
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
  AE: ASH,
};
