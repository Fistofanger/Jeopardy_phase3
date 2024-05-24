/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';
import type { AxiosResponse } from 'axios';
import { useAppDispatch } from '../../App/store/store';
import { request, setAccessToken } from '../../services/axiosInstance';
import type { UsersResponse } from './type/type';

function AuthorizationPage(): JSX.Element {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (password !== '' && login !== '') {
      const { data }: AxiosResponse<UsersResponse> = await request.post('/users', {
        email: login,
        password,
      });
      console.log(data);

      if (data.message === 'success') {
        setAccessToken(data.accessToken);
        dispatch({ type: 'users/login', payload: data.user });
        navigate('/');
      }
    }
  };

  return (
    <div>
      <form className="authorization-form" onSubmit={onHadleSubmit}>
        <input
          type="login"
          name="login"
          placeholder="email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default AuthorizationPage;
