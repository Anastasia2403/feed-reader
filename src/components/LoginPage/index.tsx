import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { setUser } from '../../store/user/user.slice';
import { login } from '../../services/auth';
import './LoginPage.css';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.trim().length === 0 || password.trim().length === 0) {
      toast.error('Login or password can not be empty');
      return;
    }

    login()
      .then((data) => {
        dispatch(setUser(data));
        navigate('/');
      })
      .catch(() => {
        toast.error('Something went wrong. Please try again,later!');
      });
  };

  return (
    <div className="mainContainer">
      <h1>Login Page</h1>
      <h2>Please login to read a feed</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <TextField
          id="username"
          label="Username"
          variant="outlined"
          type="text"
          required
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          required
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={handleTogglePasswordVisibility}
                  aria-label="toggle password visibility"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" type="submit">
          LOGIN
        </Button>
      </form>
    </div>
  );
};
