import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Quote from '../components/quote';

it('renders correctly', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Quote component', () => {
  test("Rendererd component contains the word 'Mathematics'", () => {
    render(<Quote />);
    expect(screen.getByText(/Mathematics/i)).toBeInTheDocument();
  });
});
