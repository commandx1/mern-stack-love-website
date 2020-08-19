const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../../models/http-error");
const Yorum = require("../../models/blog/comment");
const Reply = require("../../models/blog/reply");
const User = require("../../models/user");

const getRepliesByComment = async (req, res, next) => {
  const commentId = req.params.cid;
  let replies;
  try {
    replies = await Reply.find({ comment: commentId })
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Yorumlar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    replies: replies.map((reply) => reply.toObject({ getters: true })),
  });
};

// const getFirstTenPosts = async (req, res, next) => {
//   let posts;
//   try {
//     posts = await Blog.find().sort({ orderingDate: -1 }).limit(10);
//   } catch (err) {
//     const error = new HttpError(
//       "Bir hatayla karşılaşıldı. Yazılar yüklenemiyoggr !",
//       500
//     );
//     return next(error);
//   }
//   res.json({
//     posts: posts.map((post) => post.toObject({ getters: true })),
//   });
// };

const updateReply = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Yorumu boş bıraktınız !", 422));
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

  const { content } = req.body;
  const replyId = req.params.rid;

  let reply;
  try {
    reply = await Reply.findById(replyId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  if (reply.content === content) {
    res.status(200).json({
        reply: reply.toObject({ getters: true }),
      message: {
        type: "warning",
        content: "Değişiklik yapmadınız 🤔",
      },
    });
  } else {
    reply.content = content;
    reply.update = myDate;
    reply.orderingDate = date;
    try {
      await reply.save();
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
      reply: reply.toObject({ getters: true }),
    });
  }
};

const deleteReply = async (req, res, next) => {
  const replyId = req.params.rid;

  let reply;
  let reply2
  try {
    reply = await Reply.findById(replyId).populate("kullanici");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  if (!reply) {
    const error = new HttpError("Böyle bir yorum bulunamadı", 404);
    return next(error);
  }

  
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    reply.kullanici.replies.pull(reply);
    await reply.kullanici.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  try {
    reply2 = await Reply.findById(replyId).populate("comment");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  if (!reply2) {
    const error = new HttpError("Böyle bir yorum bulunamadı", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await reply2.remove({ session: sess });
    reply2.comment.reply.pull(reply);
    await reply2.comment.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  res.status(200).json({
    message: {
      type: "info",
      content: "Yorum başarıyla silindi...",
    },
  });
};

const createReply = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Yorumu boş bıraktınız !", 422));
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

  const { content, kullanici, username, comment } = req.body;

  const createdReply = new Reply({
    comment,
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
      "Yorum oluşturulurken hata meydana geldi, lütfen tekrar deneyiniz",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Kullanıcı bulunamadı.", 404);
    return next(error);
  }

  let yorum;
  try {
    yorum = await Yorum.findById(comment);
  } catch (err) {
    const error = new HttpError(
      "Yorum oluşturulurken hata meydana geldi, lütfen tekrar deneyiniz",
      500
    );
    return next(error);
  }

  if (!yorum) {
    const error = new HttpError("Cevabı yazılacak olan yorum bulunamadı.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdReply.save({ session: sess });
    user.replies.push(createdReply);
    yorum.reply.push(createdReply);
    await user.save({ session: sess });
    await yorum.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Yorum oluşturulurken hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error);
  }
  res.status(201).json({ reply: createdReply });
};

// exports.getFirstTenPosts = getFirstTenPosts;
exports.getRepliesByComment = getRepliesByComment;
exports.updateReply = updateReply;
exports.deleteReply = deleteReply;
exports.createReply = createReply;
