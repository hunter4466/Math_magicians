import calculate from '../logic/calculate';

describe('Calculator', () => {
  test('Calculator clears correctly', () => {
    const exist = {
      total: '100',
      next: '50',
      operation: '+',
    };
    const result = {
      total: null,
      next: null,
      operation: null,
    };
    expect(calculate(exist, 'AC')).toEqual(result);
  });
  test('Calculator sums correctly', () => {
    const exist = {
      total: null,
      next: '100',
      operation: null,
    };
    const result = {
      total: '100',
      next: null,
      operation: '+',
    };
    expect(calculate(exist, '+')).toEqual(result);
  });
  test('Calculator operates and gives a correct result', () => {
    const exist = {
      total: '8',
      next: '5',
      operation: '+',
    };
    const result = {
      total: '13',
      next: null,
      operation: null,
    };
    expect(calculate(exist, '=')).toEqual(result);
  });
});
