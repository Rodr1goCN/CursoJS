import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import { About } from './components/About/about';
import './Styles/Global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
