const fs = require("fs");

const { validationResult } = require("express-validator");
const mongoose = require("mongoose");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const HttpError = require("../../models/http-error");
const Category = require("../../models/blog/category");
const User = require("../../models/user");
const Blog = require("../../models/blog/blog");
const Yorum = require("../../models/blog/comment");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

const getPostsByUserAndCategory = async (req, res, next) => {
  const userId = req.params.uid;
  const categoryId = req.params.cid;
  let posts;
  try {
    posts = await Blog.find(
      { category: categoryId, kullanici: userId },
      { title: 1, content: 1, imageUrl: 1 }
    ).sort({
      orderingDate: -1,
    });
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Yazılar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    posts: posts.map((post) => post.toObject({ getters: true })),
  });
};

const getPostsByCategory = async (req, res, next) => {
  const categoryId = req.params.cid;
  let posts;
  try {
    posts = await Blog.find({ category: categoryId }).sort({
      orderingDate: -1,
    });
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Yazılar yüklenemiyor !",
      500
    );
    return next(error);
  }
  res.json({
    posts: posts.map((post) => post.toObject({ getters: true })),
  });
};

const getFirstTenPosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Blog.find().sort({ orderingDate: -1 }).limit(10);
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Yazılar yüklenemiyoggr !",
      500
    );
    return next(error);
  }
  res.json({
    posts: posts.map((post) => post.toObject({ getters: true })),
  });
};

const getFirstThreePosts = async (req, res, next) => {
  let posts;
  try {
    posts = await Blog.find().sort({ orderingDate: -1 }).limit(3);
  } catch (err) {
    const error = new HttpError(
      "Bir hatayla karşılaşıldı. Yazılar yüklenemiyoggr !",
      500
    );
    return next(error);
  }
  res.json({
    posts: posts.map((post) => post.toObject({ getters: true })),
  });
};

const updatePost = async (req, res, next) => {
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
  const postId = req.params.pid;

  let post;
  try {
    post = await Blog.findById(postId);
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, değişiklik yapılamadı.😢",
      500
    );
    return next(error);
  }

  if (req.file) {
    if (
      post.title === title &&
      post.content === content &&
      post.imageUrl === req.file.path
    ) {
      res.status(200).json({
        post: post.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız 🤔",
        },
      });
    } else {
      post.title = title;
      post.content = content;
      post.update = myDate;
      post.orderingDate = date;
      post.imageUrl = req.file.path;
      try {
        await post.save();
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
        post: post.toObject({ getters: true }),
      });
    }
  } else {
    if (post.title === title && post.content === content) {
      res.status(200).json({
        post: post.toObject({ getters: true }),
        message: {
          type: "warning",
          content: "Değişiklik yapmadınız !",
        },
      });
    } else {
      post.title = title;
      post.content = content;
      post.update = myDate;
      post.orderingDate = date;
      try {
        await post.save();
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
        post: post.toObject({ getters: true }),
      });
    }
  }
};

const deletePost = async (req, res, next) => {
  const postId = req.params.pid;

  let post;
  let post2;

  try {
    post = await Blog.findById(postId).populate("kullanici");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.",
      500
    );
    return next(error);
  }

  if (!post) {
    const error = new HttpError("Böyle bir yazı bulunamadı", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    post.kullanici.posts.pull(post);
    await post.kullanici.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.",
      500
    );
    return next(error);
  }

  try {
    post2 = await Blog.findById(postId).populate("category");
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.",
      500
    );
    return next(error);
  }

  if (!post2) {
    const error = new HttpError("Böyle bir yazı bulunamadı", 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await post2.remove({ session: sess });
    post2.category.posts.pull(post);
    await post2.category.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Bir şeyler ters gitti, yazı silinemiyor.",
      500
    );
    return next(error);
  }

  try {
    let commentIds = post.comments.map((c) => c._id);
    await Yorum.deleteMany({
      _id: {
        $in: commentIds,
      },
    });
  } catch (err) {
    next(new HttpError("Bir şeyler ters gitti..."));
  }

  if (post.imageUrl !== "" && post.imageUrl) {
    const imagePath = post.imageUrl;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: imagePath,
    };

    s3.deleteObject(params, (error, data) => {
      if (error) {
        res
          .status(500)
          .send({ message: "Bir şeyler ters gitti, yazı silinemiyor." });
      }

      res.status(200).json({
        message: {
          type: "info",
          content: "Yazı başarıyla silindi.",
        },
      });
    });
  }

  res.status(200).json({
    message: {
      type: "info",
      content: "Yazı başarıyla silindi...",
    },
  });
};

const createPost = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Lütfen başlık, içerik ve resim alanlarını doldurunuz.",
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

  const { title, content, kullanici, username, category } = req.body;

  let user;
  try {
    user = await User.findById(kullanici);
  } catch (err) {
    res.status(404).send({ message: "Kullyazıcı bulunamadı." });
  }

  let kategori;
  try {
    kategori = await Category.findById(category);
  } catch (err) {
    res.status(404).send({ message: "Kategori bulunamadı." });
  }

  let createdPost;

  if (req.file) {
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

      createdPost = new Blog({
        title,
        content,
        kullanici,
        imageUrl: veri,
        username,
        date: myDate,
        update: myDate,
        orderingDate: date,
        category,
        comments: [],
      });
      try {
        const sess = await mongoose.startSession();
        sess.startTransaction();
        await createdPost.save({ session: sess });
        user.posts.push(createdPost);
        kategori.posts.push(createdPost);
        await user.save({ session: sess });
        await kategori.save({ session: sess });
        await sess.commitTransaction();
      } catch (err) {
        const error = new HttpError(
          "Blog oluşturulurken hata meydana geldi, lütfen tekrar deneyiniz.",
          500
        );
        return next(error);
      }
      res.status(201).json({ blog: createdPost });
    });
  } else {
    createdPost = new Blog({
      title,
      content,
      kullanici,
      username,
      date: myDate,
      update: myDate,
      orderingDate: date,
      category,
      comments: [],
    });
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdPost.save({ session: sess });
      user.posts.push(createdPost);
      kategori.posts.push(createdPost);
      await user.save({ session: sess });
      await kategori.save({ session: sess });
      await sess.commitTransaction();
    } catch (err) {
      const error = new HttpError(
        "Blog oluşturulurken hata meydana geldi, lütfen tekrar deneyiniz.",
        500
      );
      return next(error);
    }
    res.status(201).json({ blog: createdPost });
  }
};

const addImage = async (req, res, next) => {
  const postId = req.params.pid;

  let post;
  try {
    post = await Blog.findById(postId);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Bir şeyler ters gitti, fotoğraf eklenemiyor." });
  }

  if (!post) {
    res.status(404).send({ message: "Böyle bir yazı bulunamadı." });
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

    post.imageUrl = veri;

    try {
      await post.save();
    } catch (error) {
      res
        .status(500)
        .send({ message: "Bir şeyler ters gitti, fotoğraf eklenemiyor." });
    }

    res.status(201).json({
      message: {
        type: "success",
        content: "Fotoğraf eklendi 😊",
      },
      post: post,
    });
  });
};

const deleteImage = async (req, res, next) => {
  const postId = req.params.pid;

  let post;
  try {
    post = await Blog.findById(postId);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Bir şeyler ters gitti, fotoğraf kaldırılamıyor." });
  }

  if (!post) {
    res.status(404).send({ message: "Böyle bir yazı bulunamadı." });
  }

  const imagePath = post.imageUrl;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: imagePath,
  };

  s3.deleteObject(params, async (error, data) => {
    if (error) {
      res
        .status(500)
        .send({ message: "Birr şeyler ters gitti, fotoğraf silinemiyor." });
    }

    post.imageUrl = "";

    try {
      await post.save();
    } catch (error) {
      res
        .status(500)
        .send({ message: "Bir şeyler ters gitti, fotoğraf silinemiyor." });
    }

    res.status(200).json({
      message: {
        type: "info",
        content: "Fotoğraf başarıyla silindi.",
      },
    });
  });
};

exports.getFirstThreePosts = getFirstThreePosts;
exports.getFirstTenPosts = getFirstTenPosts;
exports.getPostsByCategory = getPostsByCategory;
exports.getPostsByUserAndCategory = getPostsByUserAndCategory;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
exports.addImage = addImage;
exports.deleteImage = deleteImage;
exports.createPost = createPost;
