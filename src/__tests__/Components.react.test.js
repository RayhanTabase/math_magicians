import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import Calculator from '../components/calculator/Calculator';
import Home from '../components/home/Home';
import Quote from '../components/quote/Quote';

// Calculator Component
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

// Home Component
describe('Home', () => {
  test('should render the correct text content', () => {
    const { container } = render(<Home />);
    const header = 'Welcome to our page !';
    const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
    const h2 = container.querySelector('h2');
    const p = container.querySelector('p');
    expect(h2).toHaveTextContent(header);
    expect(p).toHaveTextContent(paragraph);
  });
});

// Quotes Components
describe('Quotes', () => {
  test('should render the quotes', () => {
    const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.';
    const author = 'William Paul Thurston';
    const { container } = render(<Quote />);
    const span1 = container.querySelectorAll('span')[0];
    const span2 = container.querySelectorAll('span')[1];
    const span3 = container.querySelectorAll('span')[2];
    expect(span1).toHaveTextContent(quote);
    expect(span2).toHaveTextContent('-');
    expect(span3).toHaveTextContent(author);
  });
});
