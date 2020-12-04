import util from "../modules/util";
import jwt from "../modules/jwt";
import User from "../models/User";
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;

module.exports = {
  // middlewares
  // 미들웨어로 token이 있는지 없는지 확인하고
  // token이 있다면 jwt.verify 함수를 이용해서 토큰 hash를 확인하고 토큰에 들어있는 정보 해독
  // 해독한 정보는 req.decoded에 저장하고 있으며 이후 로그인 유무는 decoded가 있는지 없는지를 통해 알 수 있음
  checkToken: async (req, res, next) => {
    const token = req.headers.jwt;

    const user = await jwt.verify(token);
    if (user === TOKEN_EXPIRED) {
      return res.json(util.fail(405, "만료된 토큰입니다."));
    }
    if (user === TOKEN_INVALID) {
      return res.json(util.fail(405, "유효하지 않은 토큰입니다."));
    }

    const userId = user.id;

    if (!userId) {
      return res.status(405).json({
        message: "유효하지 않은 토큰입니다.",
      });
    } else {
      const userInfo = await User.findOne({ userId: userId });
      //   console.log(userInfo);
      req.user = userInfo;
      next();
    }
  },
};
