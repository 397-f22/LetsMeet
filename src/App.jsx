import { useState } from 'react';
import './App.css';
import EventComponent from './EventComponent';
import edata from './staticData/events.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';

const style = {
  backgroundColor: 'red',
};

const App = () => {
  return (
    <Signup />
  );
};

export default App;
