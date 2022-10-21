export const generateMeetingTimes = (
  data,
  requestedLength,
  requiredMembers,
  requestedDays
) => {
  // data: {
  //   <username1>: [0, 1, 2, 10, 11, 12, 13, 21, 22, 23], // buckets
  //   <username2>: [...],
  //   ...
  // }
  //
  // requestedDays: [
  //   'Sunday',
  //   'Monday',
  //   'Tuesday',
  //   'Wednesday',
  //   'Thursday',
  //   'Friday',
  //   'Saturday',
  // ];
  //
  // requestedLength in units of timeslots
  //
  // const data = {
  //   name1: [0, 1, 2, 3, 4, 5, 7],
  //   name2: [3, 4, 5, 10, 11],
  //   name3: [4, 5, 11, 12, 13],
  // };

  let buckets = Array(48 * 7)
    .fill()
    .map(() => Array(0));

  data.map(([username, arr]) => {
    arr.forEach((v) => {
      buckets[v].push(username);
    });
  });

  let result = [];
  buckets.forEach((participants, startTime) => {
    if (
      isMeetingTimeOkay(
        buckets,
        requestedLength,
        startTime,
        requiredMembers,
        requestedDays
      )
    ) {
      result.push({
        participants: participants,
        startTime: startTime,
        endTime: startTime + requestedLength - 1,
      });
    }
  });

  return result;
};

export const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const slotHasMembers = (buckets, slot, members) => {
  if (slot >= buckets.length) return false;
  return members.every((member) => buckets[slot].includes(member));
};

const encodeDay = (day) => days.findIndex((v) => day === v);

const isSelectedDay = (slot, day) => Math.floor(slot / 48) === encodeDay(day);

const isSelectedDays = (slot, days) =>
  days.some((day) => isSelectedDay(slot, day));

const isMeetingTimeOkay = (
  buckets,
  requestedLength,
  startTime,
  members,
  days
) => {
  for (let slot = startTime; slot < startTime + requestedLength; slot++) {
    if (!(slotHasMembers(buckets, slot, members) && isSelectedDays(slot, days)))
      return false;
  }
  return true;
};
