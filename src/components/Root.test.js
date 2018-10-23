import React from 'react';
import {renderIntoDocument, cleanup} from 'react-testing-library';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Root from './Root';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

afterEach(cleanup);

it('renders <Root/> into document', () => {
  renderIntoDocument(<Root store={mockStore({})} />);
})
