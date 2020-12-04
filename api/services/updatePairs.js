const { User_Room } = require("../models");

const updatePairs = async (newDetails) => {
  await newDetails.map(
    async (d) =>
      await User_Room.update(
        { ManittoUserId: d.ManittoUserId, ManitteeUserId: d.ManitteeUserId },
        { where: { UserId: d.Userid } },
      ),
  );
};

module.exports = updatePairs;
