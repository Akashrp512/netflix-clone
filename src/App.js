import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  const user = null;
  return (
    <div className="app">
    <BrowserRouter>
      {!user ? (<LoginScreen />): (
        <Routes>
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      )}
    </BrowserRouter>
    </div>
  );
}

export default App;
