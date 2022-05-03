import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import UserProvider from './Provider/userProvider';

function App() {
  return (
    <UserProvider>
      <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path= "*" element={<PageNotFound />} />
      </Routes>
    </Router>
    </UserProvider>
  );
}

export default App;
