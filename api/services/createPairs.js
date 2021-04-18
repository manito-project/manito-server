const shuffleArray = require("./shuffleArray");

// TODO: Connect past pairs to database
const pastPairs = [];

const createPairs = (members) => {
  let tempMembers = members.map((m) => {
    return { ...m };
  });

  let teams = [];
  shuffleArray(tempMembers);
  let team = {};
  for (let i = 0; i < tempMembers.length; i++) {
    if (i === tempMembers.length - 1) {
      tempMembers[0].ManittoUserId = tempMembers[i].UserId;
      tempMembers[i].SantaUserId = tempMembers[0].UserId;
      team.manitto = tempMembers[i].UserId;
      team.santa = tempMembers[0].UserId;
    } else {
      tempMembers[i].SantaUserId = tempMembers[i + 1].UserId;
      tempMembers[i + 1].ManittoUserId = tempMembers[i].UserId;
      team.manitto = tempMembers[i].UserId;
      team.santa = tempMembers[i + 1].UserId;
    }
    teams.push({ ...team });
  }

  const teamsCopy = teams.map((t) => {
    return { ...t };
  });
  pastPairs.push(...teamsCopy);
  tempMembers.sort((a, b) => (a.UserId > b.UserId ? 1 : -1));
  return tempMembers;
};

module.exports = createPairs;
