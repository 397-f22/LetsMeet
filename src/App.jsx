import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Suggestion from './components/Suggestion';
import { data } from './staticData/events';
import Administrative from './components/Administrative';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Administrative />} />
        <Route path="/events/:eventId" element={<Signup />} />
        <Route path="/events/:eventId/filter" element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
