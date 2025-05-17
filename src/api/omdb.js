const API_KEY  = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  if (!query?.trim()) return [];
  const res  = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query.trim())}`);
  const data = await res.json();
  return data.Search ?? [];
};

export const fetchMovieDetails = async (imdbID) => {
  const res  = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`);
  return await res.json();
};

const DEFAULT_POPULAR_IDS = [
  "tt1375666", // Inception
  "tt0468569", // The Dark Knight
  "tt4154796", // Avengers: Endgame
  "tt0110912", // Pulp Fiction
  "tt0133093", // The Matrix
  "tt0111161", // The Shawshank Redemption
  "tt0068646", // The Godfather
  "tt0109830", // Forrest Gump
  "tt0167260", // The Lord of the Rings: The Return of the King
  "tt0076759", // Star Wars: Episode IV
  "tt0816692", // Interstellar
  "tt0114709", // Toy Story
  "tt0088763", // Back to the Future
  "tt0099685", // Goodfellas
  "tt0120737", // The Lord of the Rings: The Fellowship of the Ring
];

export const fetchPopularMovies = async () => {
  const promises = DEFAULT_POPULAR_IDS.map(id => fetchMovieDetails(id));
  return Promise.all(promises);
};

export const GENRES = [
  "Action","Adventure","Animation","Comedy","Crime","Drama",
  "Fantasy","Horror","Mystery","Romance","Sci-Fi","Thriller"
];
