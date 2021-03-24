import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';
import { Header } from './components/header';
import './App.css';
import { MainPage } from './pages/MainPage';

function App() {

  const routes = useRoutes();

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
