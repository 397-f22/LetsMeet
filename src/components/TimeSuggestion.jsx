import { days } from "../utilities/filter";
import { slot2dayIdx, slot2time } from "../utilities/time";

const TimeSuggestion = ({ meeting_info }) => {
  return (
    <div className="card p-3 d-flex">
      <div
        className="card-title"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <h2>{days[slot2dayIdx(meeting_info.startTime)]} </h2>
        <h3>
          {slot2time(meeting_info.startTime)} -{" "}
          {slot2time(meeting_info.endTime + 1)}
        </h3>
      </div>
      <div className="card-body" style={{ margin: 0, padding: 0 }}>
        <p>Participants</p>
        <div className="participants" style={{ display: "flex", gap: "5px" }}>
          {meeting_info.participants.map((p, idx) => (
            <div
              key={idx}
              style={{
                display: "block",
                borderRadius: "8px",
                backgroundColor: "#2F4C78",
                color: "white",
                padding: "0px 20px",
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeSuggestion;
