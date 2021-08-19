import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Calculator events works', () => {
  test('Clicking 2 is displayed', () => {
    render(<Calculator />);

    fireEvent.click(screen.getByRole('button', { name: '2' }));
    expect(screen.getByTestId('display')).toContainHTML('2');
  });

  test('Clicking 2 + 3 is displayed', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    expect(screen.getByTestId('display')).toContainHTML('2 + 3');
  });

  test('Clicking 2 + 3 = display 5', () => {
    render(<Calculator />);
    fireEvent.click(screen.getByRole('button', { name: '2' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '3' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));
    expect(screen.getByTestId('display')).toContainHTML('5');
  });
});
