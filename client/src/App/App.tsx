import React, { useEffect } from 'react';

import './App.css';
import type { AxiosResponse } from 'axios';
import type { ThemesResponse } from '../pages/Theme/type/type';
import AppRoutes from './provider/AppRoutes';
import Navbar from '../pages/Navbar/Navbar';
import { useAppDispatch } from './store/store';
// import { useTheme } from '../hooks/useTheme';
import { request } from '../services/axiosInstance';
// import ErrorKey from '../pages/ErrorKeyReact/ErrorKey';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const axiosPlaces = async (): Promise<void> => {
    const response: AxiosResponse<ThemesResponse> = await request.get('/themes');
    if (response.data.message === 'success') {
      dispatch({ type: 'themes/load', payload: response.data.themes });
    }
  };

  console.log('body app 1 ');

  useEffect(() => {
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
