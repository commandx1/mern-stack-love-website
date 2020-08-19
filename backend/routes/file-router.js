const express = require("express");
const imageController = require('../controllers/image-controller')
const fileUpload = require('../middleware/file-upload')


const router = express.Router();


router.post('/', fileUpload.single('image'), imageController.createImage)
router.get('/:pnumber', imageController.getImagesPerPage)
router.get('/', imageController.getThreeImages)
router.delete('/:iid', imageController.deleteImage)

module.exports = router
