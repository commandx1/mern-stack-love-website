const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const HttpError = require("../models/http-error");
const Telltale = require("../models/telltales");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const getTelltales = async (req, res, next) => {
  let telltales;
  try {
    telltales = await Telltale.find().sort({ title: 1 });
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Masallar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    telltales: telltales.map((telltale) =>
      telltale.toObject({ getters: true })
    ),
  });
};

const getFirstThree = async (req, res, next) => {
  let telltales;
  try {
    telltales = await Telltale.find().sort({ title: 1 }).limit(3);
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Masallar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    telltales: telltales.map((telltale) =>
      telltale.toObject({ getters: true })
    ),
  });
};

const updateTelltales = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Başlık veya içerik boş bırakılamaz😠", 422));
  }

  const { title, content } = req.body;
  const telltaleId = req.params.tid;

  let telltale;
  try {
    telltale = await Telltale.findById(telltaleId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  if (req.file) {
    if (
      telltale.title === title &&
      telltale.content === content &&
      telltale.imageUrl === req.file.path
    ) {
      res.status(200).json({
        telltale: telltale.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız 🤔",
        },
      });
    } else {
      telltale.title = title;
      telltale.content = content;
      telltale.imageUrl = req.file.path;
      try {
        await telltale.save();
      } catch (err) {
        const error = new HttpError(
          "Bir şeyler ters gitti, değişiklik yapılamadı. 😢",
          500
        );
        return next(error);
      }

      res.status(200).json({
        message: {
          type: "success",
          content: "Masal güncellemesi başarıyla kaydedildi (❁´◡`❁)",
        },
        telltale: telltale.toObject({ getters: true }),
      });
    }
  } else {
    if (telltale.title === title && telltale.content === content) {
      res.status(200).json({
        telltale: telltale.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız 🤔",
        },
      });
    } else {
      telltale.title = title;
      telltale.content = content;
      try {
        await telltale.save();
      } catch (err) {
        const error = new HttpError(
          "Bir şeyler ters gitti, değişiklik yapılamadı. 😢",
          500
        );
        return next(error);
      }

      res.status(200).json({
        message: {
          type: "success",
          content: "Masal güncellemesi başarıyla kaydedildi (❁´◡`❁)",
        },
        telltale: telltale.toObject({ getters: true }),
      });
    }
  }
};

const addImage = async (req, res, next) => {
  const telltaleID = req.params.tid;

  let telltale;
  try {
    telltale = await Telltale.findById(telltaleID);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, fotoğraf eklenemiyor.",
      500
    );
    return next(error);
  }

  if (!telltale) {
    const error = new HttpError("Böyle bir masal bulunamadı", 404);
    return next(error);
  }
  let myFile = req.file.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  let veri;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer,
  };

  s3.upload(params, async (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    veri = data.Key;

    telltale.imageUrl = veri;

    try {
      await telltale.save();
    } catch (error) {
      const err = new HttpError(
        "Bir şeyler ters gitti, fotoğraf eklenemiyor.",
        500
      );
      return next(err);
    }

    res.status(201).json({
      message: {
        type: "success",
        content: "Fotoğraf eklendi 😊",
      },
      telltale: telltale,
    });
  });
};

const deleteImage = async (req, res, next) => {
  const telltaleId = req.params.tid;

  let telltale;
  try {
    telltale = await Telltale.findById(telltaleId).populate("kullanici");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, fotoğraf kaldırılamıyor.",
      500
    );
    return next(error);
  }

  if (!telltale) {
    const error = new HttpError("Böyle bir masal bulunamadı", 404);
    return next(error);
  }

  const imagePath = telltale.imageUrl;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imagePath,
  };

  s3.deleteObject(params, async (error, data) => {
    if (error) {
      const err = new HttpError(
        "Bir şeyler ters gitti, fotoğraf silinemiyor.",
        500
      );
      return next(err);
    }

    telltale.imageUrl = "";

    try {
      await telltale.save();
    } catch (error) {
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

const deleteTelltale = async (req, res, next) => {
  const telltaleId = req.params.tid;

  let telltale;
  try {
    telltale = await Telltale.findById(telltaleId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, anı silinemiyorrr.",
      500
    );
    return next(error);
  }

  if (!telltale) {
    const error = new HttpError("Böyle bir masal bulunamadı😿", 404);
    return next(error);
  }

  try {
    await telltale.remove();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, masal silinemiyor.",
      500
    );
    return next(error);
  }

  if (telltale.imageUrl !== "") {
    const imagePath = telltale.imageUrl;
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: imagePath,
    };
    s3.deleteObject(params, (error, data) => {
      if (error) {
        const err = new HttpError(
          "Bir şeyler ters gitti, masal silinemiyor.",
          500
        );
        return next(err);
      }

      res.status(200).json({
        message: {
          type: "info",
          content: "Masal silindi...",
        },
      });
    });
  }
};

const createTelltale = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Başlık ve içerik boş bırakılamaz! Lütfen tekrar deneyin.",
        422
      )
    );
  }

  if (!req.file) {
    return next(new HttpError("Lütfen masalınıza fotoğraf ekleyiniz.", 422));
  }

  const { title, content } = req.body;

  let createdTelltale;
  let myFile = req.file.originalname.split(".");
  const fileType = myFile[myFile.length - 1];

  let veri;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: req.file.buffer,
  };

  s3.upload(params, async (error, data) => {
    if (error) {
      res.status(500).send(error);
    }
    veri = data.Key;

    createdTelltale = new Telltale({
      title,
      content,
      imageUrl: veri,
    });
    try {
      await createdTelltale.save();
    } catch (err) {
      const error = new HttpError(
        "Masal oluştururken hata meydana geldi, lütfen tekrar deneyiniz.",
        500
      );
      return next(error);
    }
    res.status(201).json({ telltale: createdTelltale });
  });
};

exports.getTelltales = getTelltales;
exports.getFirstThree = getFirstThree;
exports.updateTelltales = updateTelltales;
exports.deleteTelltale = deleteTelltale;
exports.addImage = addImage;
exports.deleteImage = deleteImage;
exports.createTelltale = createTelltale;
