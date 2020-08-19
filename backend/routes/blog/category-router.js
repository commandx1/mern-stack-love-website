const express = require("express");
const { check } = require("express-validator");
const categoryController = require("../../controllers/blog/category-controller");

const router = express.Router();

router.get("/", categoryController.getCategories);

router.post(
  "/",
  check("title").not().isEmpty(),
  check("label").not().isEmpty(),
  categoryController.createCategory
);

router.patch(
  "/:cid",
  check("title").not().isEmpty(),
  categoryController.updateCategory
);

router.delete("/:cid", categoryController.deleteCategory);

module.exports = router;



