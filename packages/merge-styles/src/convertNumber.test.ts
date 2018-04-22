import { convertNumber } from './convertNumber';

describe('convertNumber', () => {
  it('works with basic map set', () => {
    const map = 'ABC';
    expect(convertNumber(0, map)).toEqual('A');
    expect(convertNumber(1, map)).toEqual('B');
    expect(convertNumber(2, map)).toEqual('C');
    expect(convertNumber(3, map)).toEqual('AA');
    expect(convertNumber(4, map)).toEqual('AB');
    expect(convertNumber(5, map)).toEqual('AC');
    expect(convertNumber(6, map)).toEqual('BA');
    expect(convertNumber(7, map)).toEqual('BB');
    expect(convertNumber(8, map)).toEqual('BC');
    expect(convertNumber(9, map)).toEqual('CA');
    expect(convertNumber(10, map)).toEqual('CB');
    expect(convertNumber(11, map)).toEqual('CC');
    expect(convertNumber(12, map)).toEqual('AAA');
  });

  it('works with a single digit map', () => {
    expect(convertNumber(0, 'A')).toEqual('A');
    expect(convertNumber(1, 'A')).toEqual('AA');
  });
});