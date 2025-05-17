import { useEffect, useState } from "react";
import {
  fetchPopularMovies,
  searchMovies,
  fetchMovieDetails,
  GENRES,
} from "../api/omdb";
import MovieGrid from "../components/MovieGrid";
import Header from "../components/Header";
import FilterBar from "../components/Filters/FilterBar";
import { Box, Container } from "@mui/material";

export default function Home() {
  const [allMovies, setAllMovies] = useState([]);
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(0);
  const genres = GENRES;

  useEffect(() => {
    (async () => {
      const popular = await fetchPopularMovies();
      setAllMovies(popular);
      applyFilters(popular, selectedGenre, minRating);
    })();
  }, []);

  useEffect(() => {
    applyFilters(allMovies, selectedGenre, minRating);
  }, [selectedGenre, minRating, allMovies]);

  const normalizeRating = (movie) => {
    const r = parseFloat(movie.imdbRating || 0);
    return Number.isNaN(r) ? 0 : r;
  };

  const applyFilters = (movies, genre, rating) => {
    const filtered = movies.filter((m) => {
      const movieGenres = (m.Genre || "")
        .split(",")
        .map((g) => g.trim());
      const passesGenre = !genre || movieGenres.includes(genre);
      const passesRating = normalizeRating(m) >= rating;
      return passesGenre && passesRating;
    });
    setDisplayedMovies(filtered);
  };

  const handleSearch = async (query) => {
    let results = [];

    if (!query.trim()) {
      results = await fetchPopularMovies();
    } else {
      const raw = await searchMovies(query);
      const detailed = await Promise.all(raw.map((m) => fetchMovieDetails(m.imdbID)));
      results = detailed;
    }

    setAllMovies(results);
    applyFilters(results, selectedGenre, minRating);
  };

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.98)',
      }
    }}>
      <Header onSearch={handleSearch} />
      <Container maxWidth="xl" sx={{ pt: { xs: 8, sm: 9 } }}>
        <FilterBar
          genres={genres}
          selectedGenre={selectedGenre}
          minRating={minRating}
          onGenreChange={(e) => setSelectedGenre(e.target.value)}
          onRatingChange={(_, val) => setMinRating(val)}
        />
        <Box sx={{ 
          py: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
          '& .MuiTypography-root': {
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 500,
            '&.Mui-focused': {
              color: '#E50914'
            }
          }
        }}>
          <MovieGrid movies={displayedMovies} />
        </Box>
      </Container>
    </Box>
  );
}
