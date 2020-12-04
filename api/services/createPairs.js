// TODO: Connect past pairs to database

const data = [
  {
    UserId: 1,
    RoomId: 1,
    // createdAt: "2020-12-03T12:33:06.000Z",
    // updatedAt: "2020-12-03T12:33:06.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 2,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 3,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 4,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 5,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 6,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 7,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 8,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 9,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
  {
    UserId: 10,
    RoomId: 1,
    // createdAt: "2020-12-03T12:34:59.000Z",
    // updatedAt: "2020-12-03T12:34:59.000Z",
    ManittoUserId: null,
    ManitteeUserId: null,
  },
];

// function checkIfDuplicateExists(w) {
//   return new Set(w).size !== w.length;
// }
function checkIfDuplicateExists(arr) {
  const unique = [...new Set(arr.map((a) => JSON.stringify(a)))];
  const stringifiedArr = arr.map((a) => JSON.stringify(a));
  return unique.length !== stringifiedArr.length;
}

const matchedPairs = [];

const pastPairs = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const createPairs = (members) => {
  let tempMembers = members.map((m) => {
    return { ...m };
  });
  const pairExists = (currentTeams) => {
    const stringifiedTeams = currentTeams.map((t) => JSON.stringify({ ...t }));
    const stringifiedPastPairs = pastPairs.map((p) => JSON.stringify({ ...p }));
    return stringifiedTeams.some((st) => stringifiedPastPairs.includes(st));
  };

  let teams = [];
  while (true) {
    shuffleArray(tempMembers);
    let team = {};
    for (let i = 0; i < tempMembers.length; i++) {
      if (i === tempMembers.length - 1) {
        tempMembers[0].ManitteeUserId = tempMembers[i].UserId;
        tempMembers[i].ManittoUserId = tempMembers[0].UserId;
        team.manittee = tempMembers[i].UserId;
        team.manitto = tempMembers[0].UserId;
      } else {
        tempMembers[i].ManittoUserId = tempMembers[i + 1].UserId;
        tempMembers[i + 1].ManitteeUserId = tempMembers[i].UserId;
        team.manittee = tempMembers[i].UserId;
        team.manitto = tempMembers[i + 1].UserId;
      }
      // console.log(team);
      teams.push({ ...team });
    }
    if (pairExists(teams)) {
      // pastPairs.some(
      //   (pair) =>
      //     pair.manittee === team.manittee && pair.manitto === team.manitto,
      // )
      teams.length = 0;
      // console.log("pastPairs", pastPairs);
      // console.log("continue");
      continue;
    } else {
      break;
    }
  }

  const teamsCopy = teams.map((t) => {
    return { ...t };
  });
  pastPairs.push(...teamsCopy);
  tempMembers.sort((a, b) => (a.UserId > b.UserId ? 1 : -1));
  // matchedPairs.push(tempMembers);
  // console.log("Pushed!");
  // console.log("Matched Pairs length:", matchedPairs.length);
  // console.log("pastPairs", pastPairs);
  // console.log("pastPairs length", pastPairs.length);
  return tempMembers;
};

// console.log(createPairs(data));
// console.log(createPairs(data));
// console.log(createPairs(data));
// createPairs(data);
// for (let s = 0; s < 3; s++) {
//   console.log("Matched pairs", createPairs(data));
//   if (checkIfDuplicateExists(pastPairs)) {
//     console.log("pastPairs 안에서 중복 발생!");
//   }
//   if (checkIfDuplicateExists(matchedPairs)) {
//     console.log("MathcedPaires 안에서 중복 발생");
//   }
// }

module.exports = createPairs;
