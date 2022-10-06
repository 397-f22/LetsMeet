import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventComponent from './EventComponent';
import edata from './staticData/events.json'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {



  const [count, setCount] = useState(0);


  return (
    <div className="App">
        {
          edata.events.map((value) => <EventComponent key={value.eventId} event={value}></EventComponent>)
        }
    </div>
  );
};

export default App;
