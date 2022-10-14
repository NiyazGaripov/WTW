import {Film} from './types/film.type';

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

export const films: Film[] = [
  {
    'name': 'Snatch',
    'posterImage': 'img/snatch.jpg',
    'previewImage': 'img/snatch.jpg',
    'backgroundImage': 'img/snatch.jpg',
    'backgroundColor': '#FDFDFC',
    'description': 'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
    'rating': 0.2,
    'scoresCount': 716577,
    'director': 'Guy Ritchie',
    'starring': [
      'Jason Statham',
      'Brad Pitt',
      'Benicio Del Toro'
    ],
    'runTime': 104,
    'genre': 'Comedy',
    'released': 2000,
    'id': 1,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'War of the Worlds',
    'posterImage': 'img/war-of-the-worlds.jpg',
    'previewImage': 'img/war-of-the-worlds.jpg',
    'backgroundImage': 'img/war-of-the-worlds.jpg',
    'backgroundColor': '#9B7E61',
    'description': 'As Earth is invaded by alien tripod fighting machines, one family fights for survival.',
    'rating': 9.3,
    'scoresCount': 386834,
    'director': 'Steven Spielberg',
    'starring': [
      'Tom Cruise',
      'Dakota Fanning',
      'Tim Robbins'
    ],
    'runTime': 116,
    'genre': 'Adventure',
    'released': 2005,
    'id': 3,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Johnny English',
    'posterImage': 'img/johnny-english.jpg',
    'previewImage': 'img/johnny-english.jpg',
    'backgroundImage': 'img/johnny-english.jpg',
    'backgroundColor': '#F0DBA2',
    'description': 'After a sudden attack on the MI5, Johnny English, Britain\'s most confident yet unintelligent spy, becomes Britain\'s only spy.',
    'rating': 10,
    'scoresCount': 136843,
    'director': 'Peter Howitt',
    'starring': [
      'Rowan Atkinson',
      'John Malkovich',
      'Natalie Imbruglia'
    ],
    'runTime': 88,
    'genre': 'Comedy',
    'released': 2003,
    'id': 4,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Dardjeeling Limited',
    'posterImage': 'img/dardjeeling-limited.jpg',
    'previewImage': 'img/dardjeeling-limited.jpg',
    'backgroundImage': 'img/dardjeeling-limited.jpg',
    'backgroundColor': '#AD9F8B',
    'description': 'A year after their father\'s funeral, three brothers travel across India by train in an attempt to bond with each other.',
    'rating': 3.6,
    'scoresCount': 165106,
    'director': 'Wes Anderson',
    'starring': [
      'Owen Wilson',
      'Adrien Brody',
      'Jason Schwartzman'
    ],
    'runTime': 91,
    'genre': 'Adventure',
    'released': 2007,
    'id': 5,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'What We Do in the Shadows',
    'posterImage': 'img/what-we-do-in-the-shadows.jpg',
    'previewImage': 'img/what-we-do-in-the-shadows.jpg',
    'backgroundImage': 'img/what-we-do-in-the-shadows.jpg',
    'backgroundColor': '#A39E81',
    'description': 'A look into the daily (or rather, nightly) lives of three vampires who\'ve lived together for over 100 years, in Staten Island.',
    'rating': 7.2,
    'scoresCount': 6173,
    'director': 'Jemaine Clement',
    'starring': [
      'Kayvan Novak',
      'Matt Berry',
      'Natasia Demetriou'
    ],
    'runTime': 30,
    'genre': 'Comedy',
    'released': 2019,
    'id': 6,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Moonrise Kingdom',
    'posterImage': 'img/moonrise-kingdom.jpg',
    'previewImage': 'img/moonrise-kingdom.jpg',
    'backgroundImage': 'img/moonrise-kingdom.jpg',
    'backgroundColor': '#D8E3E5',
    'description': 'A pair of young lovers flee their New England town, which causes a local search party to fan out to find them.',
    'rating': 7.9,
    'scoresCount': 291183,
    'director': 'Wes Anderson',
    'starring': [
      'Jared Gilman',
      'Kara Hayward',
      'Bruce Willis'
    ],
    'runTime': 94,
    'genre': 'Adventure',
    'released': 2012,
    'id': 7,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Aviator',
    'posterImage': 'img/aviator.jpg',
    'previewImage': 'img/aviator.jpg',
    'backgroundImage': 'img/aviator.jpg',
    'backgroundColor': '#D6CDAF',
    'description': 'A biopic depicting the early years of legendary Director and aviator Howard Hughes\' career from the late 1920s to the mid 1940s.',
    'rating': 9.8,
    'scoresCount': 307174,
    'director': 'Martin Scorsese',
    'starring': [
      'Leonardo DiCaprio',
      'Cate Blanchett',
      'Kate Beckinsale'
    ],
    'runTime': 170,
    'genre': 'Drama',
    'released': 2014,
    'id': 8,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Orlando',
    'posterImage': 'img/orlando.jpg',
    'previewImage': 'img/orlando.jpg',
    'backgroundImage': 'img/orlando.jpg',
    'backgroundColor': '#D8D3BD',
    'description': 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young. Miraculously, he does just that. The film follows him as he moves through several centuries of British history, experiencing a variety of lives and relationships along the way, and even changing sex.',
    'rating': 2.6,
    'scoresCount': 12292,
    'director': 'Sally Potter',
    'starring': [
      'Tilda Swinton',
      'Billy Zane',
      'Quentin Crisp'
    ],
    'runTime': 94,
    'genre': 'Drama',
    'released': 1992,
    'id': 9,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Shutter Island',
    'posterImage': 'img/shutter-island.jpg',
    'previewImage': 'img/shutter-island.jpg',
    'backgroundImage': 'img/shutter-island.jpg',
    'backgroundColor': '#977461',
    'description': 'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
    'rating': 4.1,
    'scoresCount': 1002557,
    'director': 'Martin Scorsese',
    'starring': [
      'Leonardo DiCaprio',
      'Emily Mortimer',
      'Mark Ruffalo'
    ],
    'runTime': 138,
    'genre': 'Thriller',
    'released': 2010,
    'id': 11,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Seven Years in Tibet',
    'posterImage': 'img/seven-years-in-tibet.jpg',
    'previewImage': 'img/seven-years-in-tibet.jpg',
    'backgroundImage': 'img/seven-years-in-tibet.jpg',
    'backgroundColor': '#C6CADF',
    'description': 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China\'s takeover of Tibet.',
    'rating': 3.6,
    'scoresCount': 112612,
    'director': 'Jean-Jacques Annaud',
    'starring': [
      'Brad Pitt',
      'David Thewlis',
      'BD Wong'
    ],
    'runTime': 136,
    'genre': 'Adventure',
    'released': 1997,
    'id': 13,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bike.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Pulp Fiction',
    'posterImage': 'img/pulp-fiction.jpg',
    'previewImage': 'img/pulp-fiction.jpg',
    'backgroundImage': 'img/pulp-fiction.jpg',
    'backgroundColor': '#795433',
    'description': 'The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    'rating': 1.5,
    'scoresCount': 1635992,
    'director': 'Quentin Tarantino',
    'starring': [
      'John Travolta',
      'Uma Thurman',
      'Samuel L. Jackson'
    ],
    'runTime': 153,
    'genre': 'Crime',
    'released': 1994,
    'id': 14,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/matrix.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Macbeth',
    'posterImage': 'img/macbeth.jpg',
    'previewImage': 'img/macbeth.jpg',
    'backgroundImage': 'img/macbeth.jpg',
    'backgroundColor': '#F1E9CE',
    'description': 'Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.',
    'rating': 3.3,
    'scoresCount': 48798,
    'director': 'Justin Kurzel',
    'starring': [
      'Michael Fassbender',
      'Marion Cotillard',
      'Jack Madigan'
    ],
    'runTime': 113,
    'genre': 'Drama',
    'released': 2015,
    'id': 15,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Midnight Special',
    'posterImage': 'img/midnight-special.jpg',
    'previewImage': 'img/midnight-special.jpg',
    'backgroundImage': 'img/midnight-special.jpg',
    'backgroundColor': '#828585',
    'description': 'A father and son go on the run, pursued by the government and a cult drawn to the child\'s special powers.',
    'rating': 3.3,
    'scoresCount': 67815,
    'director': 'Jeff Nichols',
    'starring': [
      'Michael Shannon',
      'Joel Edgerton',
      'Kirsten Dunst '
    ],
    'runTime': 112,
    'genre': 'Action',
    'released': 2016,
    'id': 17,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'We need to talk about Kevin',
    'posterImage': 'img/we-need-to-talk-about-kevin.jpg',
    'previewImage': 'img/we-need-to-talk-about-kevin.jpg',
    'backgroundImage': 'img/we-need-to-talk-about-kevin.jpg',
    'backgroundColor': '#E1DFDE',
    'description': 'Kevin\'s mother struggles to love her strange child, despite the increasingly dangerous things he says and does as he grows up. But Kevin is just getting started, and his final act will be beyond anything anyone imagined.',
    'rating': 3.8,
    'scoresCount': 123240,
    'director': 'Lynne Ramsay',
    'starring': [
      'Tilda Swinton',
      'John C. Reilly',
      'Ezra Miller'
    ],
    'runTime': 112,
    'genre': 'Drama',
    'released': 2011,
    'id': 18,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'Bohemian Rhapsody',
    'posterImage': 'img/bohemian-rhapsody.jpg',
    'previewImage': 'img/bohemian-rhapsody.jpg',
    'backgroundImage': 'img/bohemian-rhapsody.jpg',
    'backgroundColor': '#929FA5',
    'description': 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet. The film traces the meteoric rise of the band through their iconic songs and revolutionary sound. They reach unparalleled success, but in an unexpected turn Freddie, surrounded by darker influences, shuns Queen in pursuit of his solo career. Having suffered greatly without the collaboration of Queen, Freddie manages to reunite with his bandmates just in time for Live Aid. While bravely facing a recent AIDS diagnosis, Freddie leads the band in one of the greatest performances in the history of rock music. Queen cements a legacy that continues to inspire outsiders, dreamers and music lovers to this day.',
    'rating': 6.1,
    'scoresCount': 338903,
    'director': 'Bryan Singer',
    'starring': [
      'Rami Malek',
      'Lucy Boynton',
      'Gwilym Lee'
    ],
    'runTime': 134,
    'genre': 'Drama',
    'released': 2018,
    'id': 19,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'The Revenant',
    'posterImage': 'img/revenant.jpg',
    'previewImage': 'img/revenant.jpg',
    'backgroundImage': 'img/revenant.jpg',
    'backgroundColor': '#92918B',
    'description': 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    'rating': 4,
    'scoresCount': 618498,
    'director': 'Alejandro G. Iñárritu',
    'starring': [
      'Leonardo DiCaprio',
      'Tom Hardy',
      'Will Poulter'
    ],
    'runTime': 156,
    'genre': 'Action',
    'released': 2015,
    'id': 21,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bubbles.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  },
  {
    'name': 'Fantastic Beasts: The Crimes of Grindelwald',
    'posterImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'previewImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundImage': 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    'backgroundColor': '#B6A99F',
    'description': 'In an effort to thwart Grindelwald\'s plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he\'s unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.',
    'rating': 3.4,
    'scoresCount': 160757,
    'director': 'David Yates',
    'starring': [
      'Eddie Redmayne',
      'Katherine Waterston',
      'Dan Fogler'
    ],
    'runTime': 134,
    'genre': 'Fantasy',
    'released': 2018,
    'id': 22,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bike.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/dog.mp4'
  },
  {
    'name': 'No Country for Old Men',
    'posterImage': 'img/no-country-for-old-men.jpg',
    'previewImage': 'img/no-country-for-old-men.jpg',
    'backgroundImage': 'img/no-country-for-old-men.jpg',
    'backgroundColor': '#BDAD8F',
    'description': 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
    'rating': 4.1,
    'scoresCount': 764976,
    'director': 'Ethan Coen',
    'starring': [
      'Tommy Lee Jones',
      'Javier Bardem',
      'Josh Brolin'
    ],
    'runTime': 122,
    'genre': 'Crime',
    'released': 2007,
    'id': 25,
    'isFavorite': false,
    'videoLink': 'https://10.react.pages.academy/static/film/video/bike.mp4',
    'previewVideoLink': 'https://10.react.pages.academy/static/film/video/traffic.mp4'
  }
];
