const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");
const Poem = require("../models/poems");

const getPoems = async (req, res, next) => {
  let poems;
  try {
    poems = await Poem.find().sort({ title: 1 });
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Şiirler yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    poems: poems.map((poem) => poem.toObject({ getters: true })),
  });
};
const getForUpdate = async (req, res, next) => {
  let poems;
  try {
    poems = await Poem.find().sort({
      title: 1,
    });
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Şiirler yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    poems: poems.map((poem) => poem.toObject({ getters: true })),
  });
};

const getFirstPoem = async (req, res, next) => {
  let poem;
  try {
    poem = await Poem.find().sort({ _id: -1 }).limit(1);
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Şiir yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    poem: poem,
  });
};

const updatePoem = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Başlık veya şiir boş bırakılamaz😠", 422));
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  const year = date.getFullYear();
  const hour = date.getHours();
  let min = date.getMinutes();
  min = min < 10 ? "0" + min : min;
  const myDate = day + "." + month + "." + year + "  " + hour + ":" + min;

  const { title, content } = req.body;
  const poemId = req.params.pid;

  let poem;
  try {
    poem = await Poem.findById(poemId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  if (req.file) {
    if (
      poem.title === title &&
      poem.content === content &&
      poem.imageUrl === req.file.path
    ) {
      res.status(200).json({
        poem: poem.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız 🤔",
        },
      });
    } else {
      poem.title = title;
      poem.content = content;
      poem.update = myDate;
      poem.imageUrl = req.file.path;
      try {
        await poem.save();
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
          content: "Değişiklikler başarıyla kaydedildi 😊",
        },
        poem: poem.toObject({ getters: true }),
      });
    }
  } else {
    if (poem.title === title && poem.content === content) {
      res.status(200).json({
        poem: poem.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız 🤔",
        },
      });
    } else {
      poem.title = title;
      poem.content = content;
      poem.update = myDate;
      try {
        await poem.save();
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
          content: "Değişiklikler başarıyla kaydedildi 😊",
        },
        poem: poem.toObject({ getters: true }),
      });
    }
  }
};

const deletePoem = async (req, res, next) => {
  const poemId = req.params.pid;

  let poem;
  try {
    poem = await Poem.findById(poemId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, anı silinemiyorrr.",
      500
    );
    return next(error);
  }

  if (!poem) {
    const error = new HttpError("Böyle bir şiir bulunamadı😿", 404);
    return next(error);
  }

  try {
    await poem.remove();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, şiir silinemiyor.",
      500
    );
    return next(error);
  }

  if (poem.imageUrl) {
    const imagePath = poem.imageUrl;
    fs.unlink(imagePath, (err) => {
      const error = new HttpError(
        "Bir şeyler ters gitti, şiir silinemiyor.",
        500
      );
      return next(error);
    });
  }

  res.status(200).json({
    message: {
      type: "error",
      content: "Şiir silindi😢 Umarım yenisini yazarsın bebeim xd",
    },
  });
};

const createPoem = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Başlık ve içerik boş bırakılamaz! Lütfen tekrar deneyin.",
        422
      )
    );
  }

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  const year = date.getFullYear();
  const hour = date.getHours();
  let min = date.getMinutes();
  min = min < 10 ? "0" + min : min;
  const myDate = day + "." + month + "." + year + "  " + hour + ":" + min;

  const { title, content } = req.body;

  const createdPoem = req.file
    ? new Poem({
        title,
        content,
        date: myDate,
        update: myDate,
        imageUrl: req.file.path,
        isActive: false,
        isDelete: false,
      })
    : new Poem({
        title,
        content,
        date: myDate,
        update: myDate,
        isActive: false,
        isDelete: false,
      });

  try {
    await createdPoem.save();
  } catch (err) {
    const error = new HttpError(
      "Şiir oluştururken hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error);
  }
  res.status(201).json({ poem: createdPoem });
};

exports.getPoems = getPoems;
exports.getFirstPoem = getFirstPoem;
exports.getForUpdate = getForUpdate;
exports.updatePoem = updatePoem;
exports.deletePoem = deletePoem;
exports.createPoem = createPoem;
