import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import userService from "../../utils/userService";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Layout from "../Layout/Layout";


function App() {
  const [user, setUser] = useState(userService.getUser())
  
  function handleSignUpLogin() {
    setUser(userService.getUser());
  }
  
  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (
      <Routes>
          <Route path='/' element={<Layout user={user} handleLogout={handleLogout} />} />
          <Route path="/login" element={<LoginPage handleSignUpLogin={handleSignUpLogin}/>} />
          <Route path="/signup" element={<SignupPage handleSignUpLogin={handleSignUpLogin} />} />
      </Routes>
  );
}

export default App;
