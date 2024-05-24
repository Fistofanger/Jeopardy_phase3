import React, { useEffect } from 'react';

import './App.css';
// import type { AxiosResponse } from 'axios';

// import type { Place } from '../pages/Place/type/type';

import AppRoutes from './provider/AppRoutes';
import Navbar from '../pages/Navbar/Navbar';
// import { useTheme } from '../hooks/useTheme';
// import { useAppDispatch } from './store/store';
// import { request } from '../services/axiosInstance';

// import ErrorKey from '../pages/ErrorKeyReact/ErrorKey';

function App(): JSX.Element {
  // const dispatch = useAppDispatch();

  //                забыл протипизировать функцию
  // const axiosPlaces = async (): Promise<void> => {
  //   const response: AxiosResponse<{ message: string; places: Place[] }> =
  //     await request.get('/places');
  //   if (response.data.message === 'success') {
  //     dispatch({ type: 'places/load', payload: response.data.places });
  //   }
  // };

  // const [, togleTheme] = useTheme();

  console.log('body app 1 ');

  useEffect(() => {
    console.log('effect app 4 ');
    // axiosPlaces().catch(console.log);
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
