import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import Root from './routes/Root';
import About from './routes/About';
import ItemRoot from './routes/ItemRoot';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"      
            element={<Root cantidadArticulos="0" /> } />
        <Route path='/category/:idCategoria'       
            element={<Root /> } />
        <Route path='/item/:idProducto'       
            element={<ItemRoot /> } />
        <Route path="/about" 
            element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
