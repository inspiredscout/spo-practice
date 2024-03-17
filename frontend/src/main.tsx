import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/home/Home.tsx";
import Catalog from "./pages/catalog/Catalog.tsx";
import Card from './pages/cards/Card.tsx'
import Backet from "./pages/backet/Backet.tsx";
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
