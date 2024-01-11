import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const logoutClick = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  return (
    <>
      {userId && (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Feed reader
              </Typography>
              <Button color="inherit" onClick={logoutClick}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      )}
    </>
  );
};
