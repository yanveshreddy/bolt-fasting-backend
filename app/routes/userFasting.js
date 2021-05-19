const express = require("express");

const userFastingController = require("../controllers/userFastingController");

// const auth = require("./../middlewares/auth");

module.exports.setRouter = (app) => {
  app.post(
    "/users/:userId/createfastinghistory",
    userFastingController.createUserFastingHistory
  );

  app.post(
    "/users/userId/updatefastingdetails",
    userFastingController.createUserFastingDetails
  );

  app.get(
    "/users/:userId/getfastingdetails",
    userFastingController.getUserFastingDetails
  );
};
