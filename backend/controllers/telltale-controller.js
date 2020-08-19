const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");
const Telltale = require("../models/telltales");

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
  let imagePath;
  if (telltale.imageUrl) {
    imagePath = telltale.imageUrl;
    fs.unlink(imagePath, (err) => {
      const error = new HttpError(
        "Bir şeyler ters gitti, masal silinemiyor.",
        500
      );
      return next(error);
    });
  }

  res.status(200).json({
    message: {
      type: "info",
      content: "Masal silindi...",
    },
  });
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

  const { title, content } = req.body;

  const createdTelltale = req.file
    ? new Telltale({
        title,
        content,
        imageUrl: req.file.path,
      })
    : new Telltale({
        title,
        content,
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
};

exports.getTelltales = getTelltales;
exports.getFirstThree = getFirstThree;
exports.updateTelltales = updateTelltales;
exports.deleteTelltale = deleteTelltale;
exports.createTelltale = createTelltale;
