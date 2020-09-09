const express = require("express");
const { check } = require("express-validator");
const notificationController = require("../controllers/notification-controller");

const router = express.Router();

router.get("/:uid", notificationController.getNotifications);

router.post(
  "/",
  [
    check("username").not().isEmpty(),
    check("content").not().isEmpty(),
    check("userId").not().isEmpty(),
    check("redirect").not().isEmpty(),
  ],
  notificationController.createNotification
);

router.patch("/:nid", notificationController.markAsRead);

router.delete("/:nid", notificationController.deleteNotification);

module.exports = router;
