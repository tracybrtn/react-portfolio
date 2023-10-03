//import dependencies
import React from "react";
import { render, cleanup } from '@testing-library/react';

import Nav from '..';

//clean up function
afterEach(cleanup);

const mockCurrentSection = jest.fn();
const mockSetCurrentSection = jest.fn();

describe('Nav component', () => {
  //baseline test
  it('renders', () => {
    render(<Nav 
      currentSection={mockCurrentSection}
      setCurrentSection={mockSetCurrentSection}
      />);
  })

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });
});
