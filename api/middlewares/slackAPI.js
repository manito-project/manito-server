const axios = require("axios");
const { SLACK_WEB_HOOK_IMPORTANT_ERRORS, SLACK_WEB_HOOK_NEW_USERS } = require("../../config/slack");

const sendMessageToSlack = (message, apiEndPoint = SLACK_WEB_HOOK_IMPORTANT_ERRORS) => {
  // return;
  console.log("Sending slack message: ", message);

  try {
    axios
      .post(apiEndPoint, { text: message })
      .then((response) => {})
      .catch((e) => {
        throw e;
      });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  sendMessageToSlack,

  SLACK_WEB_HOOK_IMPORTANT_ERRORS,
  SLACK_WEB_HOOK_NEW_USERS,
};
