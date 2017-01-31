import Calculator from '../../src/core/assets/_components/general/SampleClass.js';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const calculator = new Calculator();
    const sum = calculator.add(5, 2);
    expect(sum).toBe(7);
  });

  it('should substract two numbers', () => {
    const calculator = new Calculator();
    const sub = calculator.sub(5, 2);
    expect(sub).toBe(3);
  });
});

