/**
 * @format
 */

import 'react-native';
import React from 'react';
import Sizes from '../source/size/size-guide.screen.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const snap = renderer
    .create(<Sizes />)
    .toJSON();
  expect(snap).toMatchSnapshot();
});
