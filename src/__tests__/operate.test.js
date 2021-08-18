import operate from '../logic/operate';

describe('Calculator', () => {
  test('Calculator clears correctly', () => {
    expect(operate(2, 3, '+')).toEqual('5');
  });
  test('Calculator clears correctly', () => {
    expect(operate(2, 3, 'x')).toEqual('6');
  });
  test('Calculator clears correctly', () => {
    expect(operate(10, 3, '-')).toEqual('7');
  });
});
