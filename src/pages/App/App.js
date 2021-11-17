import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import userService from "../../utils/userService";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

function App() {
  const [user, setUser] = useState(userService.getUser())
  
  function handleSignUpLogin() {
    setUser(userService.getUser());
  }
  return (
      <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path="/login" element={<LoginPage handleSignUpLogin={handleSignUpLogin}/>} />
          <Route path="/signup" element={<SignupPage handleSignUpLogin={handleSignUpLogin} />} />
      </Routes>
  );
}

export default App;
