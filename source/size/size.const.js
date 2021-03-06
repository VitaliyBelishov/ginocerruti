// @flow

export type Collection = {|
  name: string,
  id: string,
|};

export type Collections = { [collectionId: string]: Collection };

export const collections: Collections = {
  '1': {
    id: '1',
    name: 'Bridesmaids',
  },
  '2': {
    id: '2',
    name: 'Evening Wear',
  },
  '3': {
    id: '3',
    name: 'Prom Dresses',
  },
  '4': {
    id: '4',
    name: 'Lenovia Bridal',
  },
  '5': {
    id: '5',
    name: 'LENOVIA VIP',
  },
};

export type CollectionsList = string[];

export const collectionsList: CollectionsList = ['1', '2', '3', '4', '5'];

export type SizesList = string[];

export const sizesList: SizesList = ['XXXS','XXS','XS','S','M','L','XL','2XL','3XL','4XL','5XL','6XL','7XL','8XL'];

export type Gino = { [GinoId: string]: number };

export type Size = {|
  name: string,
  gino: Gino,
|};

export type Sizes = { [sizeId: string]: Size };

export const sizes: Sizes = {
  bust: {
    name: 'Bust',
    gino: {
      'XXXS': 77,
      'XXS': 81,
      'XS': 85,
      'S': 89,
      'M': 93,
      'L': 98,
      'XL': 103,
      '2XL': 109,
      '3XL': 116,
      '4XL': 122,
      '5XL': 128,
      '6XL': 134,
      '7XL': 140,
      '8XL': 146,
    },
  },
  waist: {
    name: 'Waist',
    gino: {
      'XXXS': 56,
      'XXS': 60,
      'XS': 64,
      'S': 68,
      'M': 72,
      'L': 76,
      'XL': 83,
      '2XL': 90,
      '3XL': 96,
      '4XL': 103,
      '5XL': 110,
      '6XL': 117,
      '7XL': 124,
      '8XL': 131,
    },
  },
  hips: {
    name: 'Hips',
    gino: {
      'XXXS': 84,
      'XXS': 88,
      'XS': 92,
      'S': 96,
      'M': 100,
      'L': 104,
      'XL': 110,
      '2XL': 116,
      '3XL': 123,
      '4XL': 129,
      '5XL': 135,
      '6XL': 142,
      '7XL': 148,
      '8XL': 154,
    }
  },
  UK: {
    name: 'UK',
    gino: {
      'XXXS': 4,
      'XXS': 6,
      'XS': 8,
      'S': 10,
      'M': 12,
      'L': 14,
      'XL': 16,
      '2XL': 18,
      '3XL': 20,
      '4XL': 22,
      '5XL': 24,
      '6XL': 26,
      '7XL': 28,
      '8XL': 30,
    }
  },
  US: {
    name: 'USA',
    gino: {
      'XXXS': 2,
      'XXS': 4,
      'XS': 6,
      'S': 8,
      'M': 10,
      'L': 12,
      'XL': 14,
      '2XL': 16,
      '3XL': 18,
      '4XL': 20,
      '5XL': 22,
      '6XL': 24,
      '7XL': 26,
      '8XL': 28,
    },
  },
  IT: {
    name: 'Italy',
    gino: {
      'XXXS': 36,
      'XXS': 38,
      'XS': 40,
      'S': 42,
      'M': 44,
      'L': 46,
      'XL': 48,
      '2XL': 50,
      '3XL': 52,
      '4XL': 54,
      '5XL': 56,
      '6XL': 58,
      '7XL': 60,
      '8XL': 62,
    },
  },
  ES: {
    name: 'Spain',
    gino: {
      'XXXS': 32,
      'XXS': 34,
      'XS': 36,
      'S': 38,
      'M': 40,
      'L': 42,
      'XL': 44,
      '2XL': 46,
      '3XL': 48,
      '4XL': 50,
      '5XL': 52,
      '6XL': 54,
      '7XL': 56,
      '8XL': 58,
    },
  },
  ES: {
    name: 'Spain',
    gino: {
      'XXXS': 32,
      'XXS': 34,
      'XS': 36,
      'S': 38,
      'M': 40,
      'L': 42,
      'XL': 44,
      '2XL': 46,
      '3XL': 48,
      '4XL': 50,
      '5XL': 52,
      '6XL': 54,
      '7XL': 56,
      '8XL': 58,
    },
  },
  UA: {
    name: 'Ukrain',
    gino: {
      'XXXS': 32,
      'XXS': 34,
      'XS': 36,
      'S': 38,
      'M': 40,
      'L': 42,
      'XL': 44,
      '2XL': 46,
      '3XL': 48,
      '4XL': 50,
      '5XL': 52,
      '6XL': 54,
      '7XL': 56,
      '8XL': 58,
    },
  },
};
