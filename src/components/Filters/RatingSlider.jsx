import { Box, Typography, Slider } from "@mui/material";

export default function RatingSlider({ minRating, onChange }) {
  return (
    <Box sx={{ 
      minWidth: { xs: '100%', sm: 200 },
      '& .MuiTypography-root': {
        color: 'rgba(255, 255, 255, 0.7)',
        fontWeight: 500,
        '&.Mui-focused': {
          color: '#E50914'
        }
      },
      '& .MuiSlider-root': {
        color: '#E50914',
        '& .MuiSlider-thumb': {
          '&:hover, &.Mui-focusVisible': {
            boxShadow: '0 0 0 8px rgba(229, 9, 20, 0.16)'
          }
        },
        '& .MuiSlider-mark': {
          backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        '& .MuiSlider-markLabel': {
          color: 'rgba(255, 255, 255, 0.7)'
        },
        '& .MuiSlider-valueLabel': {
          backgroundColor: '#E50914',
          color: 'white'
        }
      }
    }}>
      <Typography gutterBottom>Min Rating: {minRating}/10</Typography>
      <Slider
        value={minRating}
        onChange={onChange}
        step={0.1}
        marks={[
          { value: 0, label: '0' },
          { value: 5, label: '5' },
          { value: 10, label: '10' }
        ]}
        min={0}
        max={10}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}
