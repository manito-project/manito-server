const members = [
  "김우영",
  "이다은",
  "이한나",
  "권상호",
  "남궁선규",
  "이예슬",
  "장서현",
  "노희지",
  "안나영",
  "박세은",
  "김재민",
  "정재현",
  "최예진",
  "황지은",
];

function checkIfDuplicateExists(w) {
  return new Set(w).size !== w.length;
}
const pastPairs = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const createPairs = (members) => {
  let tempMembers = [...members];
  let teams = [];

  shuffleArray(tempMembers);

  for (let i = 0; i < tempMembers.length - 1; i++) {
    // const randomIndex = Math.floor(Math.random() * tempMembers.length);

    const team = { manito: tempMembers[i], manitee: tempMembers[i + 1] };

    for (let j = 0; j < pastPairs.length; j++) {
      if (JSON.stringify(pastPairs[j]) === JSON.stringify(team)) {
        console.log("중복");

        pastPairs.splice(i + 1);
        createPairs(members);
      }
    }
    teams.push(team);
  }
  //   console.log(tempMembers);

  const lastTeam = {
    manito: tempMembers[tempMembers.length - 1],
    manitee: tempMembers[0],
  };
  teams.push(lastTeam);
  pastPairs.push(...teams);
  //   console.log(teams);
  console.log(teams);
};
