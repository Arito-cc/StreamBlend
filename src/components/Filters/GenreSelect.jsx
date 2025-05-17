import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

export default function GenreSelect({ genres, selected, onChange }) {
  return (
    <FormControl 
      sx={{ 
        minWidth: { xs: '100%', sm: 200 },
        '& .MuiInputLabel-root': {
          color: 'rgba(255, 255, 255, 0.7)',
          '&.Mui-focused': {
            color: '#E50914'
          }
        },
        '& .MuiOutlinedInput-root': {
          color: 'white',
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
        '& .MuiSelect-icon': {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }}
    >
      <InputLabel>Genre</InputLabel>
      <Select 
        value={selected} 
        onChange={onChange} 
        label="Genre"
        MenuProps={{
          PaperProps: {
            sx: {
              bgcolor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              '& .MuiMenuItem-root': {
                color: 'white',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                },
                '&.Mui-selected': {
                  bgcolor: 'rgba(229, 9, 20, 0.2)',
                  '&:hover': {
                    bgcolor: 'rgba(229, 9, 20, 0.3)'
                  }
                }
              }
            }
          }
        }}
      >
        <MenuItem value="">All</MenuItem>
        {genres.map((genre) => (
          <MenuItem key={genre} value={genre}>{genre}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
