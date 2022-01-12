import calculate from "../../logic/calculate";

describe('Test calculate.js ability to add the number 1.1 to the number 2.2 and return a total of 3.3', () => {
  var data = {
    total: null,
    next: null,
    operation: null
  };

  test('Check first button press of 1', () => {
    data = calculate(data, '1');
    expect(data.next).toEqual("1");
  });

  test('Check making first number a decimal', () => {
    data = calculate(data, '.');
    expect(data.next).toEqual("1.");
  });

  test('Check increase of current button to 1.1', () => {
    data = calculate(data, '1');
    expect(data.next).toEqual("1.1");
  });

  test('Check adding an operator, +', () => {
    data = calculate(data, '+');
    let result = {
      total: '1.1',
      next: null,
      operation: '+'
    };
    expect(data).toEqual(result);
  });

  test('Check adding a second number', () => {
    data = calculate(data, '2');
    let result = {
      total: '1.1',
      next: '2',
      operation: '+'
    };
    expect(data).toEqual(result);
  });

  test('Check adding a dot to second number', () => {
    data = calculate(data, '.');
    let result = {
      total: '1.1',
      next: '2.',
      operation: '+'
    };
    expect(data).toEqual(result);
  });

  test('Check increasing the second number to 2.2', () => {
    data = calculate(data, '2');
    let result = {
      total: '1.1',
      next: '2.2',
      operation: '+'
    };
    expect(data).toEqual(result);
  });

  test('Check returning the sum of the two numbers, = button press', () => {
    data = calculate(data, '=');
    let result = {
      total: '3.3',
      next: null,
      operation: null
    };
    expect(data).toEqual(result);
  });

  test('Check pressing the AC button, reset all variables to null expected', () => {
    let result = {
      total: null,
      next: null,
      operation: null
    };
    data = calculate(data, 'AC');
    expect(data).toEqual(result);
  });
  
});