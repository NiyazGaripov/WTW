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
