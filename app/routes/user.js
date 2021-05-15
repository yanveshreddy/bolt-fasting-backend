const express = require("express");

const userController = require("./../../app/controllers/userController");

// const auth = require("./../middlewares/auth");

module.exports.setRouter = (app) => {
  app.post("/users/signup", userController.signUpFunction);

  app.post("/login", userController.loginFunction);
};
