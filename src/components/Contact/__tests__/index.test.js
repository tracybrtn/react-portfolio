import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<Contact/>);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />);

    expect(asFragment()).toMatchSnapshot();
  });
})

it('renders', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
})
 
it('renders', () => {
  const { getByTestId } = render(<Contact />)
  expect(getByTestId('button')).toHaveTextContent('Submit')
})