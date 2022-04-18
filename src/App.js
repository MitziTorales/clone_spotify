import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path= "*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
