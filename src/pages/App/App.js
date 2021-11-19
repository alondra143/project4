import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import userService from "../../utils/userService";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Layout from "../Layout/Layout";
import ForumFeed from '../ForumFeed/ForumFeed';


function App() {
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
        <Route path='/' element={<Layout user={user} handleLogout={handleLogout} />} >
          <Route index element={<ForumFeed />}></Route>
          <Route path="/login" element={<LoginPage handleSignUpLogin={handleSignUpLogin} />} />
          <Route path="/signup" element={<SignupPage handleSignUpLogin={handleSignUpLogin} />} />
          {/* <Route path="/:username" element={<ProfilePage user={user} />} /> */}
        </Route>
      </Routes>
    );
  }
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpLogin={handleSignUpLogin} />}
      />

      <Route
        path="/signup"
        element={<SignupPage handleSignUpLogin={handleSignUpLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
