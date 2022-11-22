import React from 'react';
import './complementos/Style.css'
import {Main} from './complementos/Main';
import {Routes, Route} from 'react-router-dom'
import {Contenido} from './complementos/Contenido';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<Contenido/>}/>=
      </Routes>
    </>
  );
}

export default App;
