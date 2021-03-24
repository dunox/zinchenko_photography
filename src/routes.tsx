import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

export const useRoutes = () => {

  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>
    </Switch>
  )
}