const express = require("express");
const { check } = require("express-validator");
const blogController = require("../../controllers/blog/blogs-controller");
const fileUpload = require("../../middleware/file-upload");

const router = express.Router();

router.get("/category/:cid", blogController.getPostsByCategory);

router.get(
  "/category/:cid/user/:uid",
  blogController.getPostsByUserAndCategory
);

router.get("/", blogController.getFirstTenPosts);

router.get("/first-three", blogController.getFirstThreePosts);

router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("content").not().isEmpty(),
  ],
  blogController.createPost
);

router.patch(
  "/:pid",
  fileUpload.single("image"),
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  blogController.updatePost
);

router.patch(
  "/image/:pid",
  fileUpload.single('image'),
  blogController.addImage
);

router.delete("/:pid", blogController.deletePost);

router.delete("/image/:pid", blogController.deleteImage);

module.exports = router;
