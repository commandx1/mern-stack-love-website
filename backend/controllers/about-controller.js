const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const HttpError = require("../models/http-error");
const AboutMe = require("../models/aboutMe");
const AboutHer = require("../models/aboutHer");

const getAboutMe = async (req, res, next) => {
  let abouts;

  try {
    abouts = await AboutMe.find();
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Hakkında yazıları yüklenemiyor 😔!",
      500
    );
    return next(error);
  }

  res.json({
    abouts: abouts,
  });
};
const getAboutHer = async (req, res, next) => {
  let abouts;
  try {
    abouts = await AboutHer.find();
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Hakkında yazıları yüklenemiyor 😔!",
      500
    );
    return next(error);
  }
  res.json({
    abouts: abouts,
  });
};

const updateAboutMe = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Başlık veya içerik boş bırakılamaz😠", 422));
  }

  const { title, content } = req.body;
  const aboutID = req.params.aid;

  let about;
  try {
    about = await AboutMe.findById(aboutID);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  about.title === title && about.content === content
    ? res.status(200).json({
        message: "Değişiklik yapmadınız.🤔",
        about: about.toObject({ getters: true }),
      })
    : (about.title = title);
  about.content = content;
  try {
    await about.save();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı. 😢",
      500
    );
    return next(error);
  }

  res.status(200).json({
    message: "Değişiklikler başarıyla kaydedildi🤭",
    about: about.toObject({ getters: true }),
  });
};
const updateAboutHer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Başlık veya içerik boş bırakılamaz😠", 422));
  }

  const { title, content } = req.body;
  const aboutID = req.params.aid;

  let about;
  try {
    about = await AboutHer.findById(aboutID);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  about.title === title && about.content === content
    ? res.status(200).json({
        message: "Değişiklik yapmadınız.🤔",
        about: about.toObject({ getters: true }),
      })
    : (about.title = title);
  about.content = content;
  try {
    await about.save();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı. 😢",
      500
    );
    return next(error);
  }

  res.status(200).json({
    message: "Değişiklikler başarıyla kaydedildi🤭",
    about: about.toObject({ getters: true }),
  });
};

const deleteAboutMe = async (req, res, next) => {
  const aboutID = req.params.aid;

  let about;
  try {
    about = await AboutMe.findById(aboutID);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.😢",
      500
    );
    return next(error);
  }

  if (!about) {
    const error = new HttpError("Böyle bir yazı bulunamadı😿", 404);
    return next(error);
  }

  try {
    await about.remove();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Yazı başarıyla silindi.." });
};
const deleteAboutHer = async (req, res, next) => {
  const aboutID = req.params.aid;

  let about;
  try {
    about = await AboutHer.findById(aboutID);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.😢",
      500
    );
    return next(error);
  }

  if (!about) {
    const error = new HttpError("Böyle bir yazı bulunamadı😿", 404);
    return next(error);
  }

  try {
    await about.remove();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Yazı başarıyla silindi.." });
};

const createAboutMe = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Başlık veya içerik boş bırakılamaz😠", 422));
  }

  const { title, content } = req.body;

  const createdAboutMe = new AboutMe({
    title,
    content,
  });

  try {
    await createdAboutMe.save();
  } catch (err) {
    const error = new HttpError(
      "Şiir oluştururken hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error);
  }
  res.status(201).json({ about: createdAboutMe });
};

const createAboutHer = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Başlık veya içerik boş bırakılamaz😠", 422));
  }
 
  const { title, content } = req.body;
  const createdAboutHer = new AboutHer({
    title,
    content,
  });

  try {
    await createdAboutHer.save();
  } catch (err) {
    const error = new HttpError(
      "Yazı oluştururken hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error);
  }
  res.status(201).json({ about: createdAboutHer });
};

exports.getAboutMe = getAboutMe;
exports.getAboutHer = getAboutHer;

exports.updateAboutMe = updateAboutMe;
exports.updateAboutHer = updateAboutHer;

exports.createAboutMe = createAboutMe;
exports.createAboutHer = createAboutHer;

exports.deleteAboutMe = deleteAboutMe;
exports.deleteAboutHer = deleteAboutHer;
