import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import { EditPage } from './Routes/Editpage/EditPage';
import { HomePage } from './Routes/HomePage/HomePage';
import { NewPage } from './Routes/NewToDoPage/New';
import './App.css';

function App() {
   return (
      <HashRouter>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/new' element={<NewPage />} />
            <Route path='/edit/:slug' element={<EditPage />} />
            <Route path='*' element={<p>Not Found</p>} />
         </Routes>
      </HashRouter>
   )
}

export { App }