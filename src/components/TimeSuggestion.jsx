import * as staticData from '../staticData/events.json';
import { slot2time, slot2dayIdx } from '../utilities/time';
import { days } from '../utilities/filter';

const TimeSuggestion = ({ meeting_info }) => {
  console.log('asdf');
  console.log(meeting_info);
  return (
    <div className="card m-1 p-2">
      <div className="card-title">
        <h2>
          {days[slot2dayIdx(meeting_info.startTime)]}{' '}
          {slot2time(meeting_info.startTime)}-
          {slot2time(meeting_info.endTime + 1)}
        </h2>
      </div>
      <div className="card-body">
        <div className="participants">
          Participants
          {meeting_info.participants.map((p) => (
            <div>- {p}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSuggestion;
