import { Box, useMediaQuery, useTheme, Typography } from "@mui/material";
import GenreSelect from "./GenreSelect";
import RatingSlider from "./RatingSlider";
import { GENRES } from "../../api/omdb";

export default function FilterBar({ selectedGenre, minRating, onGenreChange, onRatingChange }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: { xs: 'column', sm: 'row' },
      gap: { xs: 2, sm: 4 }, 
      my: 2,
      px: { xs: 1, sm: 2 },
      background: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      borderRadius: '8px',
      p: 2,
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      color: 'white',
      '& .MuiTypography-root': {
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 500,
        '&.Mui-focused': {
          color: '#E50914'
        }
      },
      '& .MuiInputBase-root': {
        color: 'white',
        '& .MuiSelect-select': {
          color: 'white'
        },
        '& fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.2)'
        },
        '&:hover fieldset': {
          borderColor: 'rgba(255, 255, 255, 0.3)'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#E50914'
        }
      },
      '& .MuiSlider-root': {
        color: '#E50914',
        '& .MuiSlider-thumb': {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 8px rgba(229, 9, 20, 0.16)'
          }
        }
      },
      '&:hover': {
        background: 'rgba(0, 0, 0, 0.98)',
      }
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          display: { xs: 'block', sm: 'none' },
          mb: 1,
          color: 'white',
          fontWeight: 600
        }}
      >
        More Movies
      </Typography>
      <GenreSelect 
        genres={GENRES} 
        selected={selectedGenre} 
        onChange={onGenreChange} 
      />
      <RatingSlider 
        minRating={minRating} 
        onChange={onRatingChange} 
      />
    </Box>
  );
}
