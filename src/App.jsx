import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914',
    },
    background: {
      default: 'rgba(0, 0, 0, 0.95)',
      paper: 'rgba(0, 0, 0, 0.95)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
