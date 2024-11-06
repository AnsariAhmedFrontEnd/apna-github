const express = require("express");
const userRouter = require("./user.router");

const mainRouter = express.Router();
const repoRouter = express.Router();
const issueRouter = express.Router();

mainRouter.use(userRouter);
mainRouter.use(repoRouter);
mainRouter.use(issueRouter);

mainRouter.get("/", (req, res) => {
  res.send("Welcome");
});

module.exports = mainRouter;
