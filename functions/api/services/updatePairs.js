const { User_Room } = require("../models");

const updatePairs = async (newDetails) => {
  await newDetails.map(
    async (d) =>
      await User_Room.update(
        { SantaUserId: d.SantaUserId, ManittoUserId: d.ManittoUserId },
        { where: { UserId: d.Userid } },
      ),
  );
};

module.exports = updatePairs;
