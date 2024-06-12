/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import type { AxiosResponse } from 'axios';
import { useAppDispatch, type RootState } from '../../App/store/store';
import { request } from '../../services/axiosInstance';

function Navbar(): JSX.Element {
  const user = useSelector((store: RootState) => store.auth.user);
  const dispatch = useAppDispatch();

  const onHandleLogout = async (): Promise<void> => {
    const { data }: AxiosResponse<{ message: string }> = await request.get('/users/logout');
    if (data.message === 'success') {
      dispatch({ type: 'users/logout' });
    }
  };

  return (
    <>
      <nav>
        <NavLink to="/" className="active">
          Главная
        </NavLink>

        {user ? (
          <>
            <NavLink to="/themes" className="active">
              Темы игры
            </NavLink>
            <p>Привет, {user.userName}</p>
            <button onClick={onHandleLogout} type="button">
              Выход
            </button>
          </>
        ) : (
          <>
            <NavLink to="/registration" className="active">
              Регистрация
            </NavLink>
            <NavLink to="/authorization" className="active">
              Авторизация
            </NavLink>
          </>
        )}
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
