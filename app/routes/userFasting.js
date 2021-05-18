const express = require("express");

const userFastingController = require("../controllers/userFastingController");

// const auth = require("./../middlewares/auth");

module.exports.setRouter = (app) => {
  app.post(
    "/users/fastinghistory",
    userFastingController.createUserFastingHistory
  );

  app.post(
    "/users/fastingdetails",
    userFastingController.createUserFastingDetail
  );

  //   app.put(
  //     "/users/:userId/updateFastingHistory",
  //     userFastingController.updateUserFastingHistory
  //   );

  //   app.post(
  //     "/users/:userId/updateFastingDetail",
  //     userFastingController.updateUserFastingDetail
  //   );
};
