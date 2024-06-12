import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../../pages/Main/Main';
// import Places from '../../pages/Place/component/Places';
import Error from '../../pages/ErrorPage/Error';
// import PlacePage from '../../pages/Place/component/PlacePage';
import RegistrationPage from '../../pages/Auth/RegistrationPage';
import AuthorizationPage from '../../pages/Auth/AuthorizationPage';
import ThemesPage from '../../pages/Theme/ThemePage';

function AppRoutes(): JSX.Element {
  return (
    <div className="AppRoutes">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/themes" element={<ThemesPage />} />
        {/* <Route path="/places" element={<Places />} /> */}
        {/* <Route path="/places/:id" element={<PlacePage />} /> */}
        {/* <Route path="/routes" element={<Places />} /> */}
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
