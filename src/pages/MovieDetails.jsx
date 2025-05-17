import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Typography,
  Container,
  CircularProgress,
  Box,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { fetchMovieDetails, fetchPopularMovies } from "../api/omdb";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
      
      // Fetch similar movies
      const popular = await fetchPopularMovies();
      // Filter out current movie and get 4 similar movies
      const similar = popular
        .filter(m => m.imdbID !== id)
        .slice(0, 4);
      setSimilarMovies(similar);
    })();
  }, [id]);

  if (!movie) {
    return (
      <Box 
        display="flex" 
        justifyContent="center" 
        mt={10}
        sx={{
          '& .MuiCircularProgress-root': {
            color: '#E50914'
          }
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
      <Container maxWidth="md" sx={{ pt: { xs: 8, sm: 9 } }}>
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center" 
          textAlign="center"
          sx={{
            '& .MuiTypography-root': {
              color: 'rgba(255, 255, 255, 0.7)',
              fontWeight: 500,
              '&.Mui-focused': {
                color: '#E50914'
              }
            }
          }}
        >
          <Typography 
            variant="h4" 
            gutterBottom
            sx={{
              color: 'white',
              fontWeight: 600
            }}
          >
            {movie.Title}
          </Typography>

          {movie.Poster !== "N/A" && (
            <Box
              component="img"
              src={movie.Poster}
              alt={movie.Title}
              sx={{ 
                height: 400, 
                mb: 2, 
                borderRadius: 2,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)',
                  borderColor: 'rgba(229, 9, 20, 0.3)'
                }
              }}
            />
          )}

          <Typography variant="body1" mb={2}>{movie.Plot}</Typography>
          <Typography variant="subtitle1" mb={1}>Rating: {movie.imdbRating}</Typography>
          <Typography variant="subtitle2" mb={2}>Released: {movie.Released}</Typography>

          <Button 
            variant="contained" 
            onClick={() => navigate("/")}
            sx={{
              bgcolor: '#E50914',
              color: 'white',
              '&:hover': {
                bgcolor: '#f40612'
              }
            }}
          >
            Back to Home
          </Button>

          {/* Similar Movies Section */}
          <Box sx={{ mt: 6, width: '100%' }}>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'white', 
                mb: 3,
                textAlign: 'left'
              }}
            >
              You May Also Like
            </Typography>
            <Grid container spacing={2}>
              {similarMovies.map((movie) => (
                <Grid item xs={12} sm={6} md={3} key={movie.imdbID}>
                  <Card 
                    sx={{ 
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        bgcolor: 'rgba(255, 255, 255, 0.1)',
                      }
                    }}
                    onClick={() => navigate(`/movie/${movie.imdbID}`)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}
                      alt={movie.Title}
                    />
                    <CardContent>
                      <Typography 
                        variant="subtitle1" 
                        sx={{ 
                          color: 'white',
                          fontWeight: 500,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {movie.Title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
