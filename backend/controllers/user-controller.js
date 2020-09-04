const { validationResult } = require("express-validator");
const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUserById = async (req, res, next) => {
  const userId = req.params.uid;

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, lütfen tekrar deneyinizz.",
      500
    );
    return next(error);
  }
  if (!user) {
    const error = new HttpError("Kullanıcı bulunamadı.", 404);
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) });
};

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Geçersiz giriş. Kullanıcı adı ve şifre en az altı haneli olmalı, isim boş bırakılamaz. Lütfen bilgilerinizi kontrol ediniz.",
        422
      )
    );
  }
  const { name, username, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError(
      "Kayıt sırasında bir haya meydana geldi, lütfen tekrar deneyin.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "Kullanıcı adı kullanılmakta, lütfen başka bir kullanıcı adı deneyiniz.",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    username,
    password,
    memories: [],
    posts: []
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Kayıt sırasında bir haya meydana geldi, lütfen tekrar deneyin.",
      500
    );
    return next(error);
  }

  res.status(201).json({
    message: "Hoşgeldin " + createdUser.name + " :)) Nasılsın tatlı şey ?",
    user: createdUser.toObject({ getters: true }),
  });
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError(
      "Giriş esnasında hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error);
  }
  if (!existingUser || existingUser.password !== password) {
    res.status(401).send({message: "Hatalı giriş yaptınız, lütfen tekrar deneyiniz."})
  }
  res.json({
    message: "Hoşgeldin " + existingUser.name + " :)) Nasılsın tatlı şey ?",
    user: existingUser.toObject({ getters: true }),
  });
};

const updateUsername = async (req, res, next) => {
  const { username } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Kullanıcı Adı en az altı haneli olmalıdır !", 422)
    );
  }

  const userId = req.params.uid;

  let usernameCheck;
  try {
    usernameCheck = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError(
      "Kayıt sırasında bir haya meydana geldi, lütfen tekrar deneyin.",
      500
    );
    return next(error);
  }

  let user;
  try {
    user = await User.findById(userId);
  } catch (err) {
    const error = new HttpError("Bir şeyler ters gitti.", 500);
    return next(error);
  }
  if (user.username !== username && usernameCheck) {
    const error = new HttpError(
      "Kullanıcı kullanılmakta, lütfen başka bir kullanıcı adı deneyiniz.",
      422
    );
    return next(error);
  }

  user.username = username;

  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı",
      500
    );
    return next(error);
  }

  res
    .status(200)
    .json({
      message: "Değişikler başarıyla kaydedildi !",
      user: user.toObject({ getters: true }),
    });
};

exports.signUp = signUp;
exports.login = login;
exports.getUserById = getUserById;
exports.updateUsername = updateUsername;
