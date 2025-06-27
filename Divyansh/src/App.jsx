import React from 'react';
import Map from './components/Map';
import UseState from './components/UseState';
import Header from './components/Header';
import Profile from './components/Profile';
import UserProvider from './context/UserContext';
import Parent from './components/Parent';
import UseRef from './components/UseRef';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  const user = {
    name: 'Divyansh'}
    return (
      <div className="w-full h-screen text-5xl bg-blue-500">
      <Link to='/home'>Home</Link>
      {/* <Map />
      <UseState />
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
        <Parent user={user} />
        <UseRef /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
