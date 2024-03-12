import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./assets/pages/home/Home.tsx";
import Catalog from "./assets/pages/catalog/Catalog.tsx";
import Card from './assets/pages/cards/Card.tsx'
import Backet from "./assets/pages/backet/Backet.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Catalog' element={<Catalog/>} />
              <Route path='/Catalog/info/:id' element={<Card/>} />
              <Route path='/Backet' element={<Backet/>} />
          </Routes>
      </Router>
  </React.StrictMode>,
)
