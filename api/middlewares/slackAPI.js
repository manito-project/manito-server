const axios = require("axios");

const SLACK_WEB_HOOK_ERROR = "https://hooks.slack.com/services/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";

const sendMessageToSlack = (message, apiEndPoint = SLACK_WEB_HOOK_ERROR) => {
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
const errorNoticeToSlack = async (e, context) => {
  console.error(e, context);
  return await axios
    .post(SLACK_WEB_HOOK_ERROR, {
      text: `에러가 발생했습니다.\n - Context:${JSON.stringify(context)}\n -error : ${JSON.stringify(error)}`,
    })
    .then((response) => {
      return {
        err: true,
        response,
      };
    })
    .catch((e) => {
      console.error(e);
    });
};

const sendBizMessageToSlack = (message, slackApiEndPoint = DEV_BIZ_LOG) => {
  axios
    .post(slackApiEndPoint, { text: message })
    .then((response) => {})
    .catch((e) => {
      throw e;
    });

  try {
  } catch (e) {
    console.error("[slackAPI 에러]", { error: e });
  }
};
const sendBizErrorMessageToSlack = (e, context) => {
  axios
    .post(DEV_BIZ_ERROR, {
      text: `-Context: ${JSON.stringify(context)}\n-error: ${JSON.stringify(error)}`,
    })
    .then((response) => {
      return {
        err: true,
        response,
      };
    })
    .catch((e) => {
      console.logger.error(e);
    });
};

module.exports = {
  sendMessageToSlack,
  errorNoticeToSlack,

  sendBizMessageToSlack,
  sendBizErrorMessageToSlack,

  SLACK_WEB_HOOK_ERROR,
};
