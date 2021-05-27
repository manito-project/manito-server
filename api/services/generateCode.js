const { nanoid } = require("nanoid");
const generateCode = () => {
  return nanoid(12);
};

module.exports = generateCode;
