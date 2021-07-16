const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");
const ImageFile = require("../models/image");
const variables = require("./variables");

const s3 = variables.s3;

const getImagesPerPage = async (req, res, next) => {
  const pageNumber = req.params.pnumber;
  let totalPosts;
  let images;
  try {
    totalPosts = await ImageFile.find().count();
    images = await ImageFile.find()
      .sort({ _id: -1 })
      .skip(pageNumber > 0 ? (pageNumber - 1) * 8 : 0)
      .limit(8);
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
    images = await ImageFile.find({}, { imageUrl: 1 }).limit(3);
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

const createImage = (req, res, next) => {
  const { title, content } = req.body;

  let myFile = req.file.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  let veri;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer,
  };
  let createdImage;

  s3.upload(params, async (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    veri = data.Key;

    createdImage = new ImageFile({
      title: "x",
      content: "y",
      imageUrl: veri,
      date: new Date(),
      comments: []
    });

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
      message: "Fotoğraf başarıyla kaydedildi 😍",
      about: createdImage,
    });
  });
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

  const imagePath = image.imageUrl;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imagePath,
  };

  try {
    await image.remove();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, fotoğraf silinemiyor.",
      500
    );
    return next(error);
  }

  s3.deleteObject(params, (error, data) => {
    if (error) {
      const err = new HttpError(
        "Bir şeyler ters gitti, fotoğraf silinemiyor.",
        500
      );
      return next(err);
    }

    res.status(200).json({
      message: {
        type: "info",
        content: "Fotoğraf başarıyla silindi.",
      },
    });
  });
};

exports.createImage = createImage;
exports.getImagesPerPage = getImagesPerPage;
exports.getThreeImages = getThreeImages;
exports.deleteImage = deleteImage;
