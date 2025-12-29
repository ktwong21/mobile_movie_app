export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
};

export const fetchMovies = async ( {query }: {query: string} ) => {
  const endpoint = query ? `search/movie?query=${encodeURIComponent(query)}` : '/discover/movie?sort_by=popularity.desc';
  const response = await fetch(`${TMDB_CONFIG.BASE_URL}/${endpoint}`, {
    method: 'GET',
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  const data = await response.json();
  return data.results;
};

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTAxNTE5NGRjN2RjNjUxMTAzZWY4MmFmZTJmODc4OCIsIm5iZiI6MTc2Njg2NTkxNS40OTgsInN1YiI6IjY5NTAzYmZiN2RkMmQ1YTc2MTE1NTRlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q0ifbHOgAN_h1Uz5OpBCkRjpz_bQHpy0xxtwr9rE2wQ'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));