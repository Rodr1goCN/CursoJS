import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import { About } from './components/About/about';
import './Styles/Global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Posts } from './components/Post/post';
import { Redirect } from './components/Redirect/redirect';
import { NotFound } from './components/NotFound/notfound';
import { Post } from './components/Post-outlet/post-outlet';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/posts/:id' element={<Posts />} />{/* Quando mais específico melhor e a ordem tende a ser primeiro */} 
      <Route path='/posts/' element={<Posts />} >
        <Route path=':id' element={<Post />} />
      </Route>

      <Route path='/posts' element={<Posts />} />
      <Route path='/redirect' element={<Redirect />} />
      <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
