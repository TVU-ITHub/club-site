const { signIn } = require("../controllers/auth-controller");

module.exports = (app) => {
  app.get("/sign-in", signIn);
};
