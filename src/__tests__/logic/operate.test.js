import operate from '../../logic/operate';

describe('Test operate.js file, all operations', () => {
  test('Check 1 + 2 = 3', () => {
    expect(operate('1', '2', '+')).toBe('3');
  });

  test('Check 2 - 1 = 1', () => {
    expect(operate('2', '1', '-')).toBe('1');
  });

  test('Check 2 x 1 = 4', () => {
    expect(operate('2', '2', 'x')).toBe('4');
  });

  test('Check 6 ÷ 2 = 3', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  test('Check 6 % 2 = 0', () => {
    expect(operate('6', '2', '%')).toBe('0');
  });

  test('Check 6.222 + 2.1 = 8.322', () => {
    expect(operate('6.222', '2.1', '+')).toBe('8.322');
  });

  test('Check 6 % 0, return string', () => {
    const returnString = "Can't find modulo as can't divide by 0.";
    expect(operate('6', '0', '%')).toBe(returnString);
  });

  test('Unknow operation error', () => {
    expect(() => operate('4', '4', '/')).toThrow();
  });
});
