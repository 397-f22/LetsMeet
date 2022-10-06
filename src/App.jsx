import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import * as edata from './staticData/events.json'

const App = () => {



  const [count, setCount] = useState(0);

  const EventComponent = ({ event }) => {
    <>
      <div className='time'>
        <h>{event.time}</h>
      </div>
      <div className='location'>
        <h>{event.location}</h>

      </div>
      <div className='participants'>
        <h>{event.participants}</h>

      </div>
    </>
  }


  return (
    <div className="App">
      {
        Object.entries(edata).map(([key, value]) => <EventComponent event={e}></EventComponent>)
      }
    </div>
  );
};

export default App;
