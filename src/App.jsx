import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Inventory from './Pages/Inventory';
import Publishers from './Pages/Publishers';
import Reports from './Pages/Reports';
import Users from './Pages/Users';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <Sidebar />

        <div className="main-layout">
          
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/publishers" element={<Publishers />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
