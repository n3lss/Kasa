import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './pages/App';
import Nav from './components/nav';
import Footer from './components/footer';
import Accueil from './pages/Accueil';
import NotFound from './pages/NotFound';
import './assets/sass/style.scss';
import Appartement from './pages/appartement';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Nav/>
      <Routes>
          <Route path='/' element={<Accueil />}/>
          <Route path='/app' element={<App />}/>
          <Route path='*' element={<NotFound />}/>
          <Route path="/Appartement/:id" element={<Appartement/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();