import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import Calculator from '../components/calculator/Calculator';

describe('Calculator', () => {
	test('should render calculator and its children', () => {
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
      '.'
		];
		render(<Calculator />);
		const buttons = screen.getAllByRole('button');
		buttons.forEach((item) => {
			expect(arr).toContain(item.name);
      expect(item).not.toBeDisabled()
		});
	});
});
