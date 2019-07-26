/**
 * @format
 */

import 'react-native';
import React from 'react';
import Sizes from '../source/size/size-guide.screen.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  sizes,
  sizesList,
  collections,
  collectionsList,
} from '../source/size/size.const.js';

import {
  sizesTest,
  sizesTestNoGino,
  sizesListTest,
} from '../source/size/test.const.js';

it('renders correctly', () => {
  const snap = renderer
    .create(
      <Sizes
        sizes={sizes}
        sizesList={sizesList}
        collections={collections}
        collectionsList={collectionsList}
      />)
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it('renders no found user size', () => {
  const snap = renderer
    .create(
      <Sizes
        sizes={sizesTest}
        sizesList={sizesList}
        collections={collections}
        collectionsList={collectionsList}
      />)
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it('renders no found gino size', () => {
  const snap = renderer
    .create(
      <Sizes
        sizes={sizesTestNoGino}
        sizesList={sizesList}
        collections={collections}
        collectionsList={collectionsList}
      />)
    .toJSON();
  expect(snap).toMatchSnapshot();
});

it('renders incorect sizesList', () => {
  const snap = renderer
    .create(
      <Sizes
        sizes={sizesTest}
        sizesList={sizesListTest}
        collections={collections}
        collectionsList={collectionsList}
      />)
    .toJSON();
  expect(snap).toMatchSnapshot();
});
