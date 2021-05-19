const express = require("express");

const userController = require("./../../app/controllers/userController");

// const auth = require("./../middlewares/auth");
module.exports.setRouter = (app) => {
  app.post("/api/auth/register", userController.signUpFunction);

  app.post("/api/auth/signin", userController.loginFunction);
};
