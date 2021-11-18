import React, {useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import userService from "../../utils/userService";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AddEntry from "../AddEntry/AddEntry";
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
          <Route path='/' element={<Layout user={user} handleLogout={handleLogout} />} >
            <Route index element={<AddEntry user={user} />}></Route>
            <Route path="/login" element={<LoginPage handleSignUpLogin={handleSignUpLogin}/>} />
            <Route path="/signup" element={<SignupPage handleSignUpLogin={handleSignUpLogin} />} />
            {/* <Route path="/:username" element={<ProfilePage user={user} />} /> */}
            </Route>
      </Routes>
  );
}

export default App;
