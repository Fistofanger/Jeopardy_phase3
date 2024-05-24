/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import type { AxiosResponse } from 'axios';
import { request, setAccessToken } from '../../services/axiosInstance';
import type { UsersResponse } from './type/type';
import { useAppDispatch } from '../../App/store/store';

function RegistrationPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const onHadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (password === checkPassword) {
      const { data }: AxiosResponse<UsersResponse> = await request.post('/users', {
        userName,
        email,
        password,
      });
      console.log(data);

      if (data.message === 'success') {
        setAccessToken(data.accessToken);
        dispatch({ type: 'users/registration', payload: data.user });
        navigate('/');
      }
    }
  };

  return (
    <form className="registration-form" onSubmit={onHadleSubmit}>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          name="name"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Check password:
        <input
          type="password"
          name="password"
          required
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
      </label>
      <br />
      <div className="button-container">
        <button type="submit">Sign up</button>
        <Link to="/authorization" className="login-button">
          Sign in
        </Link>
      </div>
    </form>
  );
}

export default RegistrationPage;
