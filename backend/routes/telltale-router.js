const express = require("express");
const { check } = require("express-validator");
const telltaleController = require("../controllers/telltale-controller");
const fileUpload = require('../middleware/file-upload')

const router = express.Router();

router.get("/", telltaleController.getTelltales);

router.get("/getfirstthree", telltaleController.getFirstThree);

router.post(
  "/",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  telltaleController.createTelltale
);

router.patch(
  "/:tid",
  fileUpload.single('image'),
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  telltaleController.updateTelltales
);

router.patch(
  "/image/:tid",
  fileUpload.single('image'),
  telltaleController.addImage
);

router.delete("/:tid", telltaleController.deleteTelltale);

router.delete("/image/:tid", telltaleController.deleteImage);

module.exports = router;
