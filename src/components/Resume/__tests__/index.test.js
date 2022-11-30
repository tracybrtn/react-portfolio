import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Resume from '..';


afterEach(cleanup);

describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<Resume/>);
  });

  //snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Resume />);

    expect(asFragment()).toMatchSnapshot();
  });
})