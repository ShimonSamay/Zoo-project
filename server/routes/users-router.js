const { register, login , getAll } = require("../controllers/users-controller");
const UserRouter = require("express").Router();

UserRouter.get("/" , getAll)
UserRouter.post("/register", register);
UserRouter.post("/login", login);

module.exports = UserRouter;
