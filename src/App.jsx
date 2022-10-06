import { useState } from 'react';
import './App.css';
import EventComponent from './EventComponent';
import edata from './staticData/events.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const style = {
  backgroundColor: 'red',
};

const App = () => {
  return (
    <div className="container">
      <div style={style}>LetsMeet</div>
      <div>
        {edata.events.map((value) => (
          <EventComponent key={value.eventId} event={value}></EventComponent>
        ))}
      </div>
    </div>
  );
};

export default App;
