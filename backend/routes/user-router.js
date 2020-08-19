const express = require("express");
const { check } = require("express-validator");
const usersController = require("../controllers/user-controller");

const router = express.Router();

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("username").isLength({min: 6 }),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signUp
);

router.get("/:uid", usersController.getUserById);

router.post("/login", usersController.login);

router.patch(
  "/:uid",
  check("username").isLength({min: 6 }),
  usersController.updateUsername
);



module.exports = router;
