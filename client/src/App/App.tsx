import React, { useEffect } from 'react';

import './App.css';
import type { AxiosResponse } from 'axios';

import type { ThemesResponse } from '../pages/Theme/type/type';

import AppRoutes from './provider/AppRoutes';
import Navbar from '../pages/Navbar/Navbar';
import { useAppDispatch } from './store/store';


import { useAppDispatch } from './store/store';
import { request, setAccessToken } from '../services/axiosInstance';
import type { UsersResponse } from '../pages/Auth/type/type';






function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const axiosPlaces = async (): Promise<void> => {
    const response: AxiosResponse<ThemesResponse> = await request.get('/themes');
    if (response.data.message === 'success') {
      dispatch({ type: 'themes/load', payload: response.data.themes });
    }
  };


  const axiosToken = async (): Promise<void> => {
    const { data }: AxiosResponse<UsersResponse> = await request.get('/tokens/refresh');
    if (data.message === 'success') {
     
      setAccessToken(data.accessToken);
      dispatch({ type: 'users/login', payload: data.user });
    }
  };

  useEffect(() => {

    axiosToken().catch(console.log);

    axiosPlaces().catch(console.log);
    return () => console.log('clear effect app.tsx');

  }, []);

  return (
    <div className="App">
      <Navbar />
      <AppRoutes />

      <div />
    </div>
  );
}

export default App;
