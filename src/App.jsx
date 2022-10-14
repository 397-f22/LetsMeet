import { useState } from "react";
import "./App.css";
import Signup from "./components/Signup";
import Suggestion from "./components/Suggestion";
import TimeBox from "./components/TimeBox";
import { data } from "./staticData/events";

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const openFilter = () => setShowFilter(true);

  return (
    <div>
      <TimeBox startTime={0} endTime={12} granularity={1} />;
    </div>
  );
};

export default App;
