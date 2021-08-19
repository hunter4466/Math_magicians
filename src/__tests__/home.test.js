import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Home from '../components/home';

it('Renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Home component', () => {
  test("Rendererd component contains 'Welcome to my page'", () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to my page/i)).toBeInTheDocument();
  });
});
