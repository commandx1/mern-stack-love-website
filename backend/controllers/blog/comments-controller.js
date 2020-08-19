const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");

const HttpError = require("../../models/http-error");
const Yorum = require("../../models/blog/comment");
const User = require("../../models/user");
const Blog = require("../../models/blog/blog");
const Reply = require('../../models/blog/reply')

const getCommentsByPost = async (req, res, next) => {
  const postId = req.params.pid;
  let comments;
  try {
    comments = await Yorum.find({ post: postId })
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Yorumlar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    comments: comments.map((comment) => comment.toObject({ getters: true })),
  });
};

const updateComment = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError("Yorumu boş bıraktınız...", 422));
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
  const commentId = req.params.cid;

  let comment;
  try {
    comment = await Yorum.findById(commentId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  if (comment.content === content) {
    res.status(200).json({
      comment: comment.toObject({ getters: true }),
      message: {
        type: "warning",
        content: "Değişiklik yapmadınız 🤔",
      },
    });
  } else {
    comment.content = content;
    comment.update = myDate;
    comment.orderingDate = date;
    try {
      await comment.save();
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
      comment: comment.toObject({ getters: true }),
    });
  }
};

const deleteComment = async (req, res, next) => {
  const commentId = req.params.cid;

  let comment;
  let comment2;
  try {
    comment = await Yorum.findById(commentId).populate("kullanici");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  if (!comment) {
    const error = new HttpError("Böyle bir yorum bulunamadı", 404);
    return next(error);
  }

  
  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    comment.kullanici.comments.pull(comment);
    await comment.kullanici.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  try {
    comment2 = await Yorum.findById(commentId).populate("post");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  if (!comment2) {
    const error = new HttpError("Böyle bir yorum bulunamadı", 404);
    return next(error);
  }



  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await comment2.remove({ session: sess });
    comment2.post.comments.pull(comment);
    await comment2.post.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yorum silinemiyor.",
      500
    );
    return next(error);
  }

  try {
    let replyIds = comment.replies.map(r => r._id);
    await Reply.deleteMany ({
      _id: {
        $in: replyIds,
      },
    });
  } catch (err) {next( new HttpError("Bir şeyler ters gitti..."))}
  

  res.status(200).json({
    message: {
      type: "info",
      content: "Yorum başarıyla silindi...",
    },
  });
};

const createComment = async (req, res, next) => {
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

  const { content, kullanici, username, post } = req.body;

  const createdComment = new Yorum({
    post,
    content,
    kullanici,
    username,
    date: myDate,
    update: myDate,
    orderingDate: date,
    reply: [],
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

  let gonderi;
  try {
    gonderi = await Blog.findById(post);
  } catch (err) {
    const error = new HttpError(
      "Yorum oluşturulurken hata meydana geldi, lütfen tekrar deneyiniz",
      500
    );
    return next(error);
  }

  if (!gonderi) {
    const error = new HttpError("Post bulunamadı.", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdComment.save({ session: sess });
    user.comments.push(createdComment);
    gonderi.comments.push(createdComment);
    await user.save({ session: sess });
    await gonderi.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Yorum oluşturulurken hata meydana geldi, lütfen tekrar deneyiniz.",
      500
    );
    return next(error);
  }
  res.status(201).json({ comment: createdComment });
};

// exports.getFirstTenPosts = getFirstTenPosts;
exports.getCommentsByPost = getCommentsByPost;
exports.updateComment = updateComment;
exports.deleteComment = deleteComment;
exports.createComment = createComment;
