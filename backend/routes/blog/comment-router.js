const express = require("express");
const { check } = require("express-validator");
const commentController = require("../../controllers/blog/comments-controller");
const fileUpload = require("../../middleware/file-upload");

const router = express.Router();

router.get("/post/:pid", commentController.getCommentsByPost);

// router.get("/", blogController.getFirstTenPosts);

router.post(
  "/",
  check("content").not().isEmpty(),
  commentController.createComment
);

router.patch(
  "/:cid",
  check("content").not().isEmpty(),
  commentController.updateComment
);

router.delete("/:cid", commentController.deleteComment);

module.exports = router;
