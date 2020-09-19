const {
  ALPHABET,
  LOWER_CASE,
  UPPER_CASE,
  VALID_AS_FIRST,
  ETH
} = require('../index.js')

describe('Lowercase constants', () => {
  test('Alphabet is returned in array format', () => {
    expect(Array.isArray(LOWER_CASE)).toBeTruthy()
  })

  test('Alphabet contains 34 characters', () => {
    expect(LOWER_CASE.length).toBe(34)
  })

  test('Characters are returned in lowercase.', () => {
    LOWER_CASE.forEach((letter) => (
      expect(letter).toBe(letter.toLowerCase())
    ))
  })

  test('All characters also exist in main alphabet.', () => {
    LOWER_CASE.forEach((letter) => (
      expect(ALPHABET.includes(letter)).toBeTruthy()
    ))
  })
})

describe('Uppecase constants', () => {
  test('Alphabet is returned in array format', () => {
    expect(Array.isArray(UPPER_CASE)).toBeTruthy()
  })

  test('Alphabet contains 34 characters', () => {
    expect(UPPER_CASE.length).toBe(34)
  })

  test('Characters are returned in uppercase.', () => {
    UPPER_CASE.forEach((letter) => (
      expect(letter).toBe(letter.toUpperCase())
    ))
  })

  test('All characters also exist in main alphabet.', () => {
    UPPER_CASE.forEach((letter) => (
      expect(ALPHABET.includes(letter)).toBeTruthy()
    ))
  })
})

describe('Valid as first character constants', () => {
  test('Alphabet is returned in array format', () => {
    expect(Array.isArray(VALID_AS_FIRST)).toBeTruthy()
  })

  test('Eth (ð) is not a valid starting letter', () => {
    expect(VALID_AS_FIRST.includes(ETH)).toBeFalsy()
  })
})

describe('Combined alphabet constants', () => {
  test('Constains all uppercase & lowercase characters', () => {
    expect([...LOWER_CASE, ...UPPER_CASE]).toMatchObject(ALPHABET)
  })

})
