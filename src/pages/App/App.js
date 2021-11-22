import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import userService from "../../utils/userService";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Layout from "../Layout/Layout";
import Feed from '../Feed/Feed';
import UserProfile from "../../pages/UserProfile/UserProfile";


export default function App() {
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpLogin() {
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  if (user) {
    return (
      <Routes>
        <Route path="/" element={<Layout user={user} handleLogout={handleLogout} />} >
          <Route index element={<Feed user={user} />}></Route>
          <Route path="/login" element={<LoginPage handleSignUpLogin={handleSignUpLogin} />} />
          <Route path="/signup" element={<SignupPage handleSignUpLogin={handleSignUpLogin} />} />
          <Route path="/:username" element={<UserProfile user={user} />} />
        </Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage handleSignUpLogin={handleSignUpLogin} />} />
      <Route path="/signup" element={<SignupPage handleSignUpLogin={handleSignUpLogin} />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}