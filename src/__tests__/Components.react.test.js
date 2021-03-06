import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Calculator from '../components/calculator/Calculator';
import Home from '../components/home/Home';
import Quote from '../components/quote/Quote';
import Navbar from '../components/navbar/Navbar';

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

  const { asFragment } = render(<Calculator />);

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
  test('snapshot test for Calculator component', () => {
    expect(asFragment()).toMatchSnapshot();
  });
});

// Navbar Component
describe('Navbar', () => {
  test('should render the navbar and its children', async () => {
    const { container } = render(<Navbar />, { wrapper: MemoryRouter });
    const headerText = 'Math Magicians';
    const navbar = container.querySelectorAll('li');
    const navbarHeader = container.querySelector('h1');
    expect(navbarHeader).toHaveTextContent(headerText);
    expect(navbar.length).toBe(3);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.getByText('Quote')).toBeInTheDocument();
  });
  test('snapshot test for Navbar component', () => {
    const { asFragment } = render(<Navbar />, { wrapper: MemoryRouter });
    expect(asFragment()).toMatchSnapshot();
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
  test('snapshot test for Home component', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// Quotes Components
describe('Quotes', () => {
  test('should render the quotes', () => {
    const { container, asFragment } = render(<Quote />);
    const quote = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.';
    const author = 'William Paul Thurston';
    const span1 = container.querySelectorAll('span')[0];
    const span2 = container.querySelectorAll('span')[1];
    const span3 = container.querySelectorAll('span')[2];
    // snapshot test for Quotes component
    expect(asFragment()).toMatchSnapshot();
    expect(span1).toHaveTextContent(quote);
    expect(span2).toHaveTextContent('-');
    expect(span3).toHaveTextContent(author);
  });
});
