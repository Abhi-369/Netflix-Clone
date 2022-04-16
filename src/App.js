import React, { useEffect } from 'react'
import './App.css';
import { auth } from './firebase'
import HomeScreen from './screens/HomeScreen';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        console.log(userAuth)
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (<LoginScreen />) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App