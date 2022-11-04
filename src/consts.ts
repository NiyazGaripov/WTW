import {Rating} from './types/rating.type';

export const genres: { name: string, path: string }[] = [
  {
    name: 'All genres',
    path: 'all'
  },
  {
    name: 'Comedies',
    path: 'comedies'
  },
  {
    name: 'Crime',
    path: 'crime'
  },
  {
    name: 'Documentary',
    path: 'documentary'
  },
  {
    name: 'Dramas',
    path: 'dramas'
  },
  {
    name: 'Horror',
    path: 'horror'
  },
  {
    name: 'Kids & Family',
    path: 'fids-family'
  },
  {
    name: 'Romance',
    path: 'romance'
  },
  {
    name: 'Sci-Fi',
    path: 'sci-fi'
  },
  {
    name: 'Thrillers',
    path: 'thrillers'
  },
];

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
    id: 'star-10',
    title: 'Rating 10',
  },
  {
    value: '9',
    id: 'star-9',
    title: 'Rating 9',
  },
  {
    value: '8',
    id: 'star-8',
    title: 'Rating 8',
  },
  {
    value: '7',
    id: 'star-7',
    title: 'Rating 7',
  },
  {
    value: '6',
    id: 'star-6',
    title: 'Rating 6',
  },
  {
    value: '5',
    id: 'star-5',
    title: 'Rating 5',
  },
  {
    value: '4',
    id: 'star-4',
    title: 'Rating 4',
  },
  {
    value: '3',
    id: 'star-3',
    title: 'Rating 3',
  },
  {
    value: '2',
    id: 'star-2',
    title: 'Rating 2',
  },
  {
    value: '1',
    id: 'star-1',
    title: 'Rating 1',
  },
];
