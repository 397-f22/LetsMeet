import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Suggestion from './components/Suggestion';
import { data } from './staticData/events';

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const openFilter = () => setShowFilter(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Signup event={data} openFilter={openFilter} />}
        />
        <Route path="/events/:eventId" element={<Suggestion />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
