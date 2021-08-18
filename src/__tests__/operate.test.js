import operate from '../logic/operate';

describe('Operate', () => {
  test('2 + 3 is 5', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });
  test('2 x 3 is 6', () => {
    expect(operate(2, 3, 'x')).toEqual('6');
  });
  test('10 - 3 is 7', () => {
    expect(operate(10, 3, '-')).toEqual('7');
  });
});
