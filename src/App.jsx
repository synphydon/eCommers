import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  let cantidadArticulos = 0;
  
  return (
      <div>
        <Routes>
          <Route path="/"     element={<Home cantidadArticulos = {cantidadArticulos} />} />
          <Route path="about" element={<About cantidadArticulos = {cantidadArticulos} />} />
        </Routes>
      </div>
  )
}

export default App
