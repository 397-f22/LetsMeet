export const filter = (data, requestedLength) => {
  // data: {
  //   <username1>: [0, 1, 2, 10, 11, 12, 13, 21, 22, 23], // buckets
  //   <username2>: [...],
  //   ...
  // }

  const data = {
    name1: [0, 1, 2, 3, 4, 5, 7],
    name2: [3, 4, 5, 10, 11],
    name3: [4, 5, 11, 12, 13],
  };

  const numParticipants = Object.keys(data).length;

  let buckets = Array(48 * 7).fill([]);
  Object.entries(data).map(([username, arr]) => {
    arr.forEach((v) => {
      buckets[v].append(username);
    });
  });

  let count2buckets = Array(numParticipants + 1).fill([]);
  buckets.forEach((arr, i) => {
    count2buckets[arr.length].append(i);
  });
};
