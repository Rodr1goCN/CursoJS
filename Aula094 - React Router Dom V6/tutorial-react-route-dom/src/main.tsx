import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import { About } from './components/About/about';
import './Styles/Global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Posts } from './components/Post/post';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/posts/:id' element={<Posts />} />{/* Quando mais específico melhor e a ordem tende a ser primeiro */}
      <Route path='/posts' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
