const express = require("express");
const { check } = require("express-validator");
const aboutController = require("../controllers/about-controller");

const router = express.Router();

router.get("/serhat", aboutController.getAboutMe);
router.get("/ceren", aboutController.getAboutHer);

router.post(
  "/serhat",
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  aboutController.createAboutMe
);
router.post(
  "/ceren",
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  aboutController.createAboutHer
);

router.patch(
  "/serhat/:aid",
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  aboutController.updateAboutMe
);
router.patch(
  "/ceren/:aid",
  [check("title").not().isEmpty(), check("content").not().isEmpty()],
  aboutController.updateAboutHer
);
router.delete(
  "/serhat/:aid",
  aboutController.deleteAboutMe
);
router.delete(
  "/ceren/:aid",
  aboutController.deleteAboutHer
);

module.exports = router;
