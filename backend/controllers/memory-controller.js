const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../models/http-error");
const Memory = require("../models/memories");
const User = require("../models/user");

const getMemories = async (req, res, next) => {
  let memories;
  try {
    memories = await Memory.find().sort({ orderingDate: -1 });
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Anılar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    memories: memories.map((memory) => memory.toObject({ getters: true })),
  });
};
const getFirstThreeMemories = async (req, res, next) => {
  let memories;
  try {
    memories = await Memory.find().sort({ orderingDate: -1 }).limit(3);
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Anılar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    memories: memories.map((memory) => memory.toObject({ getters: true })),
  });
};

const updateMemory = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Başlık veya içeriği boş bıraktınız...", 422));
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
  const memoryId = req.params.mid;

  let memory;
  try {
    memory = await Memory.findById(memoryId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  if (req.file) {
    if (
      memory.title === title &&
      memory.content === content &&
      memory.imageUrl === req.file.path
    ) {
      res.status(200).json({
        memory: memory.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız 🤔",
        },
      });
    } else {
      memory.title = title;
      memory.content = content;
      memory.update = myDate;
      memory.orderingDate = date;
      memory.imageUrl = req.file.path;
      try {
        await memory.save();
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
        memory: memory.toObject({ getters: true }),
      });
    }
  } else {
    if (memory.title === title && memory.content === content) {
      res.status(200).json({
        memory: memory.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız !",
        },
      });
    } else {
      memory.title = title;
      memory.content = content;
      memory.update = myDate;
      memory.orderingDate = date;
      try {
        await memory.save();
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
        memory: memory.toObject({ getters: true }),
      });
    }
  }
};

const deleteMemory = async (req, res, next) => {
  const memoryId = req.params.mid;

  let memory;
  try {
    memory = await Memory.findById(memoryId).populate("kullanici");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, anı silinemiyorrr.",
      500
    );
    return next(error);
  }

  if (!memory) {
    const error = new HttpError("Böyle bir anı bulunamadı", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await memory.remove({ session: sess });
    memory.kullanici.memories.pull(memory);
    await memory.kullanici.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError("Bir şeyler ters gitti, anı silinemiyor.", 500);
    return next(error);
  }

  if (memory.imageUrl) {
    const imagePath = memory.imageUrl;
    fs.unlink(imagePath, (err) => {
      const error = new HttpError(
        "Bir şeyler ters gitti, anı silinemiyor.",
        500
      );
      return next(error);
    });
  }

  res.status(200).json({
    message: {
      type: "info",
      content: "Anı başarıyla silindi...",
    },
  });
};

const createMemory = async (req, res, next) => {
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

  const { title, content, kullanici, username } = req.body;

  const createdMemory = req.file
    ? new Memory({
        title,
        content,
        kullanici,
        username,
        imageUrl: req.file.path,
        date: myDate,
        update: myDate,
        orderingDate: date,
      })
    : new Memory({
        title,
        content,
        kullanici,
        username,
        date: myDate,
        update: myDate,
        orderingDate: date,
      });

  let user;
  try {
    user = await User.findById(kullanici);
  } catch (err) {
    const error = new HttpError(
      "Anı oluştururken hata meydana geldi, lütfen tekrar deneyiniz",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Kullanıcı bulunamadı.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdMemory.save({ session: sess });
    user.memories.push(createdMemory);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Anı oluştururkennn hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error);
  }
  res.status(201).json({ memory: createdMemory });
};

exports.getMemories = getMemories;
exports.getFirstThreeMemories = getFirstThreeMemories;
exports.updateMemory = updateMemory;
exports.deleteMemory = deleteMemory;
exports.createMemory = createMemory;
