const { nanoid } = require("nanoid");
const generateCode = () => {
  return nanoid(8);
};

module.exports = generateCode;
