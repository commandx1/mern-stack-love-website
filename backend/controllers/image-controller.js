const fs = require('fs')

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");
const ImageFile = require("../models/image");



const getImagesPerPage = async (req,res,next) => {
  const pageNumber = req.params.pnumber
  let totalPosts;
  let images;
  try {
    totalPosts = await ImageFile.find().count()
    images = await ImageFile.find().sort({_id:-1}).skip(pageNumber > 0 ? ((pageNumber-1)*16) : 0).limit(16)
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Resimler yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    pageNumber: pageNumber,
    total: totalPosts,
    images: images.map((image) => image.toObject({ getters: true })),
  });
};

const getThreeImages = async (req, res, next) => {
  let images;
  try {
    images = await ImageFile.find({},{imageUrl:1}).limit(3)
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Resimler yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    images: images.map((image) => image.toObject({ getters: true })),
  });
};

const createImage = async (req, res, next) => {
  const { title, content } = req.body;
  const createdImage = new ImageFile({
      title:"x",
      content: "y",
      imageUrl: req.file.path,
      active: false,
      activeStyle:{
        width: "100%",
        height: "100%"
      }
  })

  try {
    await createdImage.save();
  } catch (err) {
    const error = new HttpError(
      "Yazı oluştururken hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error); 
  }
  res.status(201).json({
    message: 'Fotoğraf başarıyla kaydedildi 😍',
    about: createdImage });
};


const deleteImage = async (req, res, next) => {
  const imageId = req.params.iid;

  let image;
  try {
    image = await ImageFile.findById(imageId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, fotoğraf silinemiyor.",
      500
    );
    return next(error);
  }

  if (!image) {
    const error = new HttpError("Fotoğraf bulunamadı!!! 😿", 404);
    return next(error);
  }

  const imagePath = image.imageUrl

  try {
    await image.remove();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, fotoğraf silinemiyor.",
      500
    );
    return next(error);
  }

  fs.unlink(imagePath, err => {
    const error = new HttpError(
      "Bir şeyler ters gitti, fotoğraf silinemiyor.",
      500
    );
    return next(error);
  })

  res.status(200).json({
    message: {
      type: "info",
      content: "Fotoğraf başarıyla silindi.",
    },
  });
};

exports.createImage = createImage;
exports.getImagesPerPage = getImagesPerPage;
exports.getThreeImages = getThreeImages;
exports.deleteImage = deleteImage;


