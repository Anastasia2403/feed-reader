import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUser } from '../../store/user/user.slice';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const logoutClick = () => {
    dispatch(setUser({}));
    navigate('/login');
  };

  return (
    <>
      {user.id && (
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
