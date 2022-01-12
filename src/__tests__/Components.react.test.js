import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Calculator from '../components/calculator/Calculator';

describe('Calculator', () => {
  const arr = [
    'AC',
    '+/-',
    '+',
    '-',
    '=',
    '÷',
    'x',
    '%',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '.',
  ];

  render(<Calculator />);

  test('should render calculator and its children', async () => {
    const buttons = screen.getAllByRole('button');
    await act(async () => {
      buttons.forEach((item) => {
        userEvent.click(item);
        expect(item).not.toBeDisabled();
        expect(arr).toContain(item.name);
      });
    });
    expect(typeof buttons === 'object').toEqual(true);
    expect(buttons.length).toBe(19);
  });
});
