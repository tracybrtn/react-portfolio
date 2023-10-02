//import dependencies
import React from "react";
import { render, cleanup } from '@testing-library/react';
import About from '..';

//cleanup function
afterEach(cleanup);

describe('About component', () => {
  it('renders', () => {
    render(<About />);
  });
  it('matches snapshot DOM node structure', () => {
    //asFragment returns a snapshot of the About component
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
})