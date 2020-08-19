const express = require("express");
const { check } = require("express-validator");
const poemController = require("../controllers/poem-controller");
const fileUpload = require('../middleware/file-upload')

const router = express.Router();

router.get("/", poemController.getPoems);

router.get("/getfirst", poemController.getFirstPoem);

router.get("/getforupdate", poemController.getForUpdate);

router.post(
  "/",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  poemController.createPoem
);

router.patch(
  "/:pid",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  poemController.updatePoem
);

router.delete("/:pid", poemController.deletePoem);

module.exports = router;
