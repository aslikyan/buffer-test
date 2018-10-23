import React from 'react';
import {renderIntoDocument, cleanup} from 'react-testing-library';
import HomePage from './HomePage';

afterEach(cleanup);

it('renders <HomePage/> into document', () => {
  const { getByTestId } = renderIntoDocument(<HomePage />);
  expect(getByTestId('home-container').textContent).toBe('this is Home Page!!!!');

})
