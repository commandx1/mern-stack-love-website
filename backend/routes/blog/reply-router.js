const express = require("express");
const { check } = require("express-validator");
const replyController = require("../../controllers/blog/reply-controller");
const fileUpload = require("../../middleware/file-upload");

const router = express.Router();

router.get("/comment/:cid", replyController.getRepliesByComment);

// router.get("/", blogController.getFirstTenPosts);

router.post(
  "/",
  check("content").not().isEmpty(),
  replyController.createReply
);

router.patch(
  "/:rid",
  check("content").not().isEmpty(),
  replyController.updateReply
);

router.delete("/:rid", replyController.deleteReply);

module.exports = router;
