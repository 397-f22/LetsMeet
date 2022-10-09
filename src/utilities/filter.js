export const filter = (data, requestedLength, requiredMembers) => {
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

  let buckets = Array(48*7).fill().map(() => Array(0));

  Object.entries(data).map(([username, arr]) => {
    console.log(username);
    console.log(arr); 
    arr.forEach((v) => {   
      buckets[v].push(username);
    });
  });

  let count2buckets = Array(numParticipants+1).fill().map(() => Array(0));
  buckets.forEach((arr, i) => {
    count2buckets[arr.length].append(i);
  });

  const slotHasMembers = (slot, members) => {
    members.every((member) => buckets[slot].includes(member));  
  }

  const timeSlotOkay = (startingSlot) => {
    for (let slot = startingSlot; slot < requestedLength; slot++) {
      
    }
  }


};
