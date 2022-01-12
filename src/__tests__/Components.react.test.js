import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';



import Calculator from '../components/calculator/Calculator';

import Navbar from '../components/navbar/Navbar';


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


describe('Navbar', () => {

  
  test('should render the navbar and its children', async () => {
    const {container} = render(<Navbar />, {wrapper: MemoryRouter});
    const headerText = 'Math Magicians';
    const navbar = container.querySelectorAll('li');
    const navbarHeader = container.querySelector('h1');
    expect(navbarHeader).toHaveTextContent(headerText);
    expect(navbar.length).toBe(3);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.getByText('Quote')).toBeInTheDocument();
  });
});
