const db = require("../models");
const { userService } = require("../services");

const UserModel = db.User;

module.exports = {
  signIn: async (req, res) => {
    const user = await userService.getUserById("cb82c93f-174e-40b0-9e04-bc3ba9008f4c");
    return res.json(user);
  },
};
