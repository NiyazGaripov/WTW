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
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const films = [
  {
    name: 'Fantastic Beasts: The Crimes of Grindelwald',
    posterImage: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
  },
  {
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
  },
  {
    name: 'Macbeth',
    posterImage: 'img/macbeth.jpg',
  },
  {
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
  },
  {
    name: 'We need to talk about Kevin',
    posterImage: 'img/we-need-to-talk-about-kevin.jpg',
  },
  {
    name: 'What We Do in the Shadows',
    posterImage: 'img/what-we-do-in-the-shadows.jpg',
  },
  {
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
  },
  {
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
  },
  {
    name: 'Shutter Island',
    posterImage: 'img/shutter-island.jpg',
  },
  {
    name: 'Pulp Fiction',
    posterImage: 'img/pulp-fiction.jpg',
  },
  {
    name: 'No Country for Old Men',
    posterImage: 'img/no-country-for-old-men.jpg',
  },
  {
    name: 'Snatch',
    posterImage: 'img/snatch.jpg',
  },
  {
    name: 'Moonrise Kingdom',
    posterImage: 'img/moonrise-kingdom.jpg',
  },
  {
    name: 'Seven Years in Tibet',
    posterImage: 'img/seven-years-in-tibet.jpg',
  },
  {
    name: 'Midnight Special',
    posterImage: 'img/midnight-special.jpg',
  },
  {
    name: 'War of the Worlds',
    posterImage: 'img/war-of-the-worlds.jpg',
  },
  {
    name: 'Dardjeeling Limited',
    posterImage: 'img/dardjeeling-limited.jpg',
  },
  {
    name: 'Orlando',
    posterImage: 'img/orlando.jpg',
  },
  {
    name: 'Mindhunter',
    posterImage: 'img/mindhunter.jpg',
  },
];
