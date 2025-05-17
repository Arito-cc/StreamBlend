import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography } from "@mui/material";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  const navigate = useNavigate();

  // Group movies into rows of 6 for better organization
  const movieRows = [];
  for (let i = 0; i < movies.length; i += 6) {
    movieRows.push(movies.slice(i, i + 6));
  }

  return (
    <Box sx={{ width: '100%' }}>
      {movieRows.map((row, rowIndex) => (
        <Grid 
          container 
          spacing={2}
          key={rowIndex}
          sx={{
            mb: 3,
            '& .MuiGrid-item': {
              display: 'flex',
              justifyContent: 'center'
            }
          }}
        >
          {row.map((movie) => (
            <Grid 
              item 
              key={movie.imdbID}
              xs={12}
              sm={6}
              md={4}
              lg={2}
            >
              <MovieCard 
                movie={movie}
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
              />
            </Grid>
          ))}
        </Grid>
      ))}
      {movies.length === 0 && (
        <Typography 
          variant="h6" 
          align="center" 
          sx={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            mt: 4 
          }}
        >
          No movies found
        </Typography>
      )}
    </Box>
  );
}
