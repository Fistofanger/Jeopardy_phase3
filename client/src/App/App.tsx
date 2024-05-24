import React, { useEffect } from 'react';

import './App.css';
import type { AxiosResponse } from 'axios';

// import type { Place } from '../pages/Place/type/type';

import AppRoutes from './provider/AppRoutes';
import Navbar from '../pages/Navbar/Navbar';
// import { useTheme } from '../hooks/useTheme';
import { useAppDispatch } from './store/store';
import { request, setAccessToken } from '../services/axiosInstance';
import type { UsersResponse } from '../pages/Auth/type/type';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  //                забыл протипизировать функцию
  // const axiosPlaces = async (): Promise<void> => {
  //   const response: AxiosResponse<{ message: string; places: Place[] }> =
  //     await request.get('/places');
  //   if (response.data.message === 'success') {
  //     dispatch({ type: 'places/load', payload: response.data.places });
  //   }
  // };

  // const [, togleTheme] = useTheme();

  const axiosToken = async (): Promise<void> => {
    const { data }: AxiosResponse<UsersResponse> = await request.get('/tokens/refresh');
    if (data.message === 'success') {
      console.log(data.accessToken);
      setAccessToken(data.accessToken);
      dispatch({ type: 'users/login', payload: data.user });
    }
  };

  useEffect(() => {
    axiosToken().catch(console.log);
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
