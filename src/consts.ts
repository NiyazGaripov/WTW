import {Rating} from './types/rating.type';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  MyList = '/mylist',
  Movie = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const RATINGS: Rating[] = [
  {
    value: '10',
    title: 'Rating 10',
  },
  {
    value: '9',
    title: 'Rating 9',
  },
  {
    value: '8',
    title: 'Rating 8',
  },
  {
    value: '7',
    title: 'Rating 7',
  },
  {
    value: '6',
    title: 'Rating 6',
  },
  {
    value: '5',
    title: 'Rating 5',
  },
  {
    value: '4',
    title: 'Rating 4',
  },
  {
    value: '3',
    title: 'Rating 3',
  },
  {
    value: '2',
    title: 'Rating 2',
  },
  {
    value: '1',
    title: 'Rating 1',
  },
];

export const TABS = ['Overview', 'Details', 'Reviews'];

export const Config = {
  DEFAULT_GENRE: 'All genres',
  NUMBER_OF_FILMS_SHOWN: 8,
};

export enum APIRoute {
  Films = '/films',
  Comments = '/comments',
  Promo = '/promo',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
}

export enum DataLoadingStatus {
  None = 'none',
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}
