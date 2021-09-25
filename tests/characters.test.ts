import {
  ASH,
  AE,
} from '../src';

describe('Character constants', () => {
  test('æ is available both as ash and ae', () => {
    expect(ASH).toEqual('æ');
    expect(AE).toEqual('æ');
    expect(AE).toEqual(ASH);
  });
});
