import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function MovieCard({ movie }) {
  return (
    <Card sx={{ 
      maxWidth: 200,
      bgcolor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.02)',
        boxShadow: '0 0 20px rgba(229, 9, 20, 0.3)',
        borderColor: 'rgba(229, 9, 20, 0.3)'
      }
    }}>
      <CardMedia
        component="img"
        height="300"
        image={movie.Poster}
        alt={movie.Title}
        sx={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      />
      <CardContent sx={{ 
        p: 1.5,
        '&:last-child': { pb: 1.5 }
      }}>
        <Typography 
          variant="subtitle1" 
          noWrap
          sx={{
            color: 'white',
            fontWeight: 500
          }}
        >
          {movie.Title}
        </Typography>
      </CardContent>
    </Card>
  );
}
