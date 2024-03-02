import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./assets/pages/home/Home.tsx";
import Catalog from "./assets/pages/catalog/Catalog.tsx";
import Card from './assets/pages/cards/Card.tsx'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Catalog' element={<Catalog/>} />
              <Route path='/Catalog/info' element={<Card/>} />
          </Routes>
      </Router>
  </React.StrictMode>,
)
