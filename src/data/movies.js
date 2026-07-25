export const GENRES = [
  'All',
  'Action',
  'Drama',
  'Comedy',
  'Thriller',
  'Sci-Fi',
  'Romance',
  'Horror',
  'Fantasy',
]

const movies = [
  {
    id: '1',
    title: 'Inception',
    genre: 'Sci-Fi',
    rating: 8.8,
    release_year: 2010,
    year: 2010,
    duration: '2h 28m',
    overview:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.',
    poster_url:
      'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'The Dark Knight',
    genre: 'Action',
    rating: 9.0,
    release_year: 2008,
    year: 2008,
    duration: '2h 32m',
    overview:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    poster_url:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Interstellar',
    genre: 'Sci-Fi',
    rating: 8.7,
    release_year: 2014,
    year: 2014,
    duration: '2h 49m',
    overview:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
    poster_url:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Dune: Part Two',
    genre: 'Sci-Fi',
    rating: 8.9,
    release_year: 2024,
    year: 2024,
    duration: '2h 46m',
    overview:
      'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe.',
    poster_url:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'Oppenheimer',
    genre: 'Drama',
    rating: 8.9,
    release_year: 2023,
    year: 2023,
    duration: '3h 00m',
    overview:
      'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
    poster_url:
      'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Spider-Man: Across the Spider-Verse',
    genre: 'Action',
    rating: 8.7,
    release_year: 2023,
    year: 2023,
    duration: '2h 20m',
    overview:
      'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash, Miles must redefine what it means to be a hero.',
    poster_url:
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '7',
    title: 'The Godfather',
    genre: 'Drama',
    rating: 9.2,
    release_year: 1972,
    year: 1972,
    duration: '2h 55m',
    overview:
      'Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.',
    poster_url:
      'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '8',
    title: 'Pulp Fiction',
    genre: 'Thriller',
    rating: 8.9,
    release_year: 1994,
    year: 1994,
    duration: '2h 34m',
    overview:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption in Los Angeles.',
    poster_url:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '9',
    title: 'The Lord of the Rings: The Return of the King',
    genre: 'Fantasy',
    rating: 9.0,
    release_year: 2003,
    year: 2003,
    duration: '3h 21m',
    overview:
      'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
    poster_url:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '10',
    title: 'Everything Everywhere All at Once',
    genre: 'Comedy',
    rating: 8.8,
    release_year: 2022,
    year: 2022,
    duration: '2h 19m',
    overview:
      'A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    poster_url:
      'https://images.unsplash.com/photo-1533488765986-dfa2a9939acd?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '11',
    title: 'The Batman',
    genre: 'Action',
    rating: 8.1,
    release_year: 2022,
    year: 2022,
    duration: '2h 56m',
    overview:
      'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
    poster_url:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '12',
    title: 'La La Land',
    genre: 'Romance',
    rating: 8.0,
    release_year: 2016,
    year: 2016,
    duration: '2h 08m',
    overview:
      'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
    poster_url:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '13',
    title: 'Alien: Romulus',
    genre: 'Horror',
    rating: 7.5,
    release_year: 2024,
    year: 2024,
    duration: '1h 59m',
    overview:
      'While scavenging the deep ends of a derelict space station, a group of young space colonizers come face to face with the most terrifying life form in the universe.',
    poster_url:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '14',
    title: 'The Shining',
    genre: 'Horror',
    rating: 8.4,
    release_year: 1980,
    year: 1980,
    duration: '2h 26m',
    overview:
      'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
    poster_url:
      'https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '15',
    title: 'Knives Out',
    genre: 'Comedy',
    rating: 7.9,
    release_year: 2019,
    year: 2019,
    duration: '2h 10m',
    overview:
      'A detective investigates the death of a patriarch of an eccentric, combative family.',
    poster_url:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '16',
    title: 'Parasite',
    genre: 'Thriller',
    rating: 8.5,
    release_year: 2019,
    year: 2019,
    duration: '2h 12m',
    overview:
      'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    poster_url:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '17',
    title: 'Avatar: The Way of Water',
    genre: 'Fantasy',
    rating: 7.6,
    release_year: 2022,
    year: 2022,
    duration: '3h 12m',
    overview:
      'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home.',
    poster_url:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '18',
    title: 'The Notebook',
    genre: 'Romance',
    rating: 7.8,
    release_year: 2004,
    year: 2004,
    duration: '2h 03m',
    overview:
      'An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by social differences.',
    poster_url:
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '19',
    title: 'Joker',
    genre: 'Drama',
    rating: 8.4,
    release_year: 2019,
    year: 2019,
    duration: '2h 02m',
    overview:
      'A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain.',
    poster_url:
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '20',
    title: 'Gladiator II',
    genre: 'Action',
    rating: 7.7,
    release_year: 2024,
    year: 2024,
    duration: '2h 28m',
    overview:
      'After his home is conquered by the tyrannical emperors who now lead Rome, Lucius must enter the Colosseum to return glory to the people of Rome.',
    poster_url:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    backdrop_url:
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1600&auto=format&fit=crop',
  },
]

export default movies
