export const filter = (
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

  // requestedLength in units of timeslots

  const data = {
    name1: [0, 1, 2, 3, 4, 5, 7],
    name2: [3, 4, 5, 10, 11],
    name3: [4, 5, 11, 12, 13],
  };

  const numParticipants = Object.keys(data).length;

  let buckets = Array(48 * 7)
    .fill()
    .map(() => Array(0));

  Object.entries(data).map(([username, arr]) => {
    console.log(username);
    console.log(arr);
    arr.forEach((v) => {
      buckets[v].push(username);
    });
  });

  let count2buckets = Array(numParticipants + 1)
    .fill()
    .map(() => Array(0));
  buckets.forEach((arr, i) => {
    count2buckets[arr.length].append(i);
  });

  const slotHasMembers = (slot, members) => {
    if (slot >= buckets.length) return false;
    return members.every((member) => buckets[slot].includes(member));
  };

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const encodeDay = (day) => days.findIndex(day);

  const isSelectedDay = (slot, day) => Math.floor(slot / 48) === encodeDay(day);

  const isSelectedDays = (slot, days) =>
    days.some((day) => isSelectedDay(slot, day));

  const isMeetingTimeOkay = (startTime, members, days) => {
    for (let slot = startTime; slot < startTime + requestedLength; slot++) {
      if (!(slotHasMembers(slot, members) && isSelectedDays(slot, days)))
        return false;
    }
    return true;
  };

  return buckets.filter((members, startTime) =>
    isMeetingTimeOkay(startTime, requiredMembers, requestedDays)
  );
};
