const express = require("express");
const { check } = require("express-validator");
const memoryController = require("../controllers/memory-controller");
const fileUpload = require('../middleware/file-upload')

const router = express.Router();

router.get("/", memoryController.getMemories);

router.get("/getfirstthree", memoryController.getFirstThreeMemories);

router.post(
  "/",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  memoryController.createMemory
);

router.patch(
  "/:mid",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  memoryController.updateMemory
);

router.patch(
  "/image/:mid",
  fileUpload.single('image'),
  memoryController.addImage
);

router.delete("/:mid", memoryController.deleteMemory);

router.delete("/image/:mid", memoryController.deleteImage);

module.exports = router;
