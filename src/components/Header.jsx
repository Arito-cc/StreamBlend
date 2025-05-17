import { AppBar, Toolbar, Typography, InputBase, Box, Container, useMediaQuery, useTheme, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

export default function Header({ onSearch }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
      e.target.value = "";
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Home', 'Movies', 'TV Shows', 'My List'];

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{ 
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.95), rgba(20, 20, 20, 0.95))',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.98), rgba(20, 20, 20, 0.98))',
          }
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            sx={{ 
              py: { xs: 1, sm: 1.5 },
              px: { xs: 1, sm: 2 },
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: { xs: 1, sm: 2 }
            }}
          >
            {/* Left Section - Logo and Navigation */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, sm: 2, md: 3 } }}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography 
                  variant={isMobile ? "h6" : "h5"}
                  noWrap 
                  sx={{ 
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    letterSpacing: '-1px',
                    background: 'linear-gradient(45deg, #E50914, #FF4D4D)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 30px rgba(229,9,20,0.4)'
                  }}
                >
                  StreamBlend
                </Typography>
              </motion.div>

              {!isMobile && (
                <Box sx={{ 
                  display: 'flex', 
                  gap: { sm: 1, md: 2 },
                  '& .MuiButton-root': {
                    minWidth: 'auto',
                    px: { sm: 1, md: 2 },
                    fontSize: { sm: '0.85rem', md: '0.95rem' },
                    fontFamily: "'Poppins', sans-serif",
                    textTransform: 'none',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: 0,
                      left: '50%',
                      background: '#E50914',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)'
                    },
                    '&:hover::after': {
                      width: '80%'
                    }
                  }
                }}>
                  {menuItems.map((item) => (
                    <Button 
                      key={item} 
                      color="inherit" 
                      sx={{ 
                        fontWeight: 500,
                        display: { xs: 'none', sm: 'block' },
                        color: 'rgba(255, 255, 255, 0.9)',
                        '&:hover': {
                          color: '#FFFFFF',
                          background: 'transparent'
                        }
                      }}
                    >
                      {item}
                    </Button>
                  ))}
                </Box>
              )}
            </Box>

            {/* Right Section - Search and Profile */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: { xs: 1, sm: 2 }
            }}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgba(255, 255, 255, 0.08)',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.12)',
                    },
                    borderRadius: '8px',
                    width: { xs: '120px', sm: '180px', md: '250px' },
                    px: { xs: 1, sm: 1.5 },
                    py: { xs: 0.5, sm: 0.75 },
                    transition: 'all 0.3s ease',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <SearchIcon sx={{ 
                    color: 'rgba(255, 255, 255, 0.6)', 
                    mr: 1,
                    fontSize: { xs: '1.1rem', sm: '1.3rem' },
                  }} />
                  <InputBase
                    placeholder="Search..."
                    onKeyDown={handleSearch}
                    sx={{
                      color: '#FFFFFF',
                      width: '100%',
                      fontFamily: "'Poppins', sans-serif",
                      '&::placeholder': {
                        color: 'rgba(255,255,255,0.4)',
                        fontStyle: 'italic'
                      },
                      '& .MuiInputBase-input': {
                        padding: { xs: '2px 0', sm: '4px 0' },
                        fontSize: { xs: '0.85rem', sm: '0.95rem' }
                      }
                    }}
                  />
                </Box>
              </motion.div>

              {!isMobile && (
                <>
                  <IconButton 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#E50914',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <NotificationsIcon />
                  </IconButton>
                  <IconButton 
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: '#E50914',
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <AccountCircleIcon />
                  </IconButton>
                </>
              )}

              {isMobile && (
                <IconButton 
                  onClick={toggleDrawer}
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#E50914',
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(20, 20, 20, 0.98))',
            backdropFilter: 'blur(10px)',
            width: '70%',
            maxWidth: '300px',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
          }
        }}
      >
        <List sx={{ pt: 8 }}>
          {menuItems.map((item) => (
            <ListItem 
              button 
              key={item}
              sx={{
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <ListItemText 
                primary={item} 
                sx={{ 
                  color: 'white',
                  '& .MuiTypography-root': {
                    fontSize: '1.1rem'
                  }
                }} 
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
