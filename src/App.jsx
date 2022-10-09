import { useState } from 'react';
import './App.css';
import EventComponent from './EventComponent';
import edata from './staticData/events.json';
import Signup from './components/Signup';
import data from './staticData/events.json';

const style = {
  backgroundColor: 'red',
};

console.log('json', data);
const App = () => {
  return <Signup event={data} />;
};

export default App;
